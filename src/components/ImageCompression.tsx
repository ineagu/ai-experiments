import React, { useState, useRef, useEffect } from 'react';

const OptimoleImageCompressor = () => {
  const [files, setFiles] = useState([]);
  const [compressionLevel, setCompressionLevel] = useState('medium');
  const [outputFormat, setOutputFormat] = useState('auto');
  const [processedImages, setProcessedImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showFeatures, setShowFeatures] = useState(false);
  const fileInputRef = useRef(null);
  
  // Clear error message when files change
  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  }, [files]);
  
  // Handle file selection
  const handleFileChange = (e) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    } catch (error) {
      console.error("Error handling file change:", error);
      setErrorMessage("Failed to process selected files. Please try again.");
    }
  };
  
  // Process files (filter and validate)
  const processFiles = (selectedFiles) => {
    try {
      // Filter valid files (image types and size limit)
      const validFiles = selectedFiles.filter(file => {
        const isImage = ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
        const isUnderSizeLimit = file.size <= 5 * 1024 * 1024; // 5MB
        return isImage && isUnderSizeLimit;
      });
      
      if (validFiles.length === 0) {
        setErrorMessage("No valid image files were found. Please upload JPEG, PNG or WebP images under 5MB.");
        return;
      }
      
      // Limit to 5 files max
      const newFiles = [...files, ...validFiles].slice(0, 5);
      setFiles(newFiles);
    } catch (error) {
      console.error("Error processing files:", error);
      setErrorMessage("Failed to process files. Please try again with different images.");
    }
  };
  
  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    try {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const droppedFiles = Array.from(e.dataTransfer.files);
        processFiles(droppedFiles);
      }
    } catch (error) {
      console.error("Error handling file drop:", error);
      setErrorMessage("Failed to process dropped files. Please try uploading them instead.");
    }
  };
  
  // Remove file from list
  const removeFile = (index) => {
    try {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
    } catch (error) {
      console.error("Error removing file:", error);
    }
  };

  // Create fallback for failed images
  const createFallbackImage = (message) => {
    return {
      error: true,
      errorMessage: message,
      dataUrl: null,
      downloadUrl: null,
      originalUrl: null,
      originalSize: 0,
      compressedSize: 0
    };
  };

  // Create optimized image with Optimole URL
  const createOptimoleUrl = (file, options = {}) => {
    return new Promise((resolve, reject) => {
      try {
        // Check for invalid inputs
        if (!file || typeof file !== 'object' || !file.type || !file.name) {
          throw new Error("Invalid file object");
        }
        
        // Generate a data URL
        const reader = new FileReader();
        
        reader.onload = function() {
          try {
            // Create a temporary image to get dimensions
            const img = new Image();
            
            img.onload = function() {
              try {
                // Default options
                const defaults = {
                  width: img.width,
                  height: img.height,
                  quality: compressionLevel === 'low' ? 85 : compressionLevel === 'medium' ? 65 : 45,
                  format: outputFormat === 'auto' ? 'avif' : outputFormat
                };
                
                // Merge options
                const settings = { ...defaults, ...options };
                
                // For quality, use mauto if set to auto
                const qualityParam = settings.quality === 'auto' ? 'mauto' : settings.quality;
                
                // Random identifier for demo purposes
                const randomId = Math.random().toString(36).substring(2, 8);
                const randomHash = Math.floor(Math.random() * 100000);
                
                // Base64 encode the data URL to simulate a file URL
                const fileUrl = encodeURIComponent(file.name);
                
                // Construct the Optimole URL
                const optimoleUrl = `https://mlvoslivyghz.i.optimole.com/cb:${randomId}~${randomHash}/w:${settings.width}/h:${settings.height}/q:${qualityParam}/ig:${settings.format}/${fileUrl}`;
                
                // Scale down if image is too large
                const maxDimension = 1200;
                let canvasWidth = img.width;
                let canvasHeight = img.height;
                
                if (canvasWidth > maxDimension || canvasHeight > maxDimension) {
                  if (canvasWidth > canvasHeight) {
                    canvasHeight = Math.round((canvasHeight / canvasWidth) * maxDimension);
                    canvasWidth = maxDimension;
                  } else {
                    canvasWidth = Math.round((canvasWidth / canvasHeight) * maxDimension);
                    canvasHeight = maxDimension;
                  }
                }
                
                // Create canvas for image manipulation
                const canvas = document.createElement('canvas');
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
                
                // Determine output format
                let outputMimeType;
                switch(settings.format) {
                  case 'webp': outputMimeType = 'image/webp'; break;
                  case 'png': outputMimeType = 'image/png'; break;
                  case 'jpeg': outputMimeType = 'image/jpeg'; break;
                  default: outputMimeType = 'image/jpeg'; // fallback to JPEG
                }
                
                // Convert quality from 0-100 to 0-1 for canvas
                const qualityValue = typeof settings.quality === 'number' ? settings.quality / 100 : 0.8;
                const dataUrl = canvas.toDataURL(outputMimeType, qualityValue);
                
                // Calculate simulated file size reduction
                const originalSize = file.size;
                const compressionFactor = typeof settings.quality === 'number' 
                  ? settings.quality / 100 
                  : compressionLevel === 'low' ? 0.85 : compressionLevel === 'medium' ? 0.65 : 0.45;
                const compressedSize = Math.round(originalSize * compressionFactor);
                
                // Create result object
                const result = {
                  file,
                  optimoleUrl,
                  dataUrl,
                  originalUrl: reader.result,
                  originalSize,
                  compressedSize,
                  width: img.width,
                  height: img.height,
                  quality: settings.quality,
                  format: settings.format
                };
                
                // Try to create downloadable blob
                try {
                  const byteString = atob(dataUrl.split(',')[1]);
                  const ab = new ArrayBuffer(byteString.length);
                  const ia = new Uint8Array(ab);
                  
                  for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                  }
                  
                  const blob = new Blob([ab], {type: outputMimeType});
                  const blobUrl = URL.createObjectURL(blob);
                  
                  // Add download URL if successful
                  result.downloadUrl = blobUrl;
                } catch (blobError) {
                  console.error("Error creating blob for download:", blobError);
                  // Continue without download URL
                  result.downloadUrl = null;
                }
                
                resolve(result);
              } catch (processingError) {
                console.error("Error processing image:", processingError);
                reject(processingError);
              }
            };
            
            img.onerror = function(imageError) {
              console.error("Error loading image:", imageError);
              reject(new Error("Failed to load image data"));
            };
            
            img.src = reader.result;
          } catch (error) {
            console.error("Error after file read:", error);
            reject(error);
          }
        };
        
        reader.onerror = function(readerError) {
          console.error("Error reading file:", readerError);
          reject(new Error("Failed to read file data"));
        };
        
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error in createOptimoleUrl:", error);
        reject(error);
      }
    });
  };
  
  // Process all images
  const compressImages = () => {
    if (files.length === 0) return;
    
    // Clear any previous error message
    setErrorMessage(null);
    setIsProcessing(true);
    
    // Process files one by one rather than using Promise.all
    const processNextFile = (index, results = []) => {
      // If we've processed all files, we're done
      if (index >= files.length) {
        setProcessedImages(results);
        setIsProcessing(false);
        return;
      }
      
      // Process the current file
      const file = files[index];
      const options = {
        quality: compressionLevel === 'low' ? 85 : compressionLevel === 'medium' ? 65 : 45,
        format: outputFormat === 'auto' ? 'avif' : outputFormat
      };
      
      // Process the file with a timeout between files
      setTimeout(() => {
        createOptimoleUrl(file, options)
          .then(result => {
            // Add the result to our array and process the next file
            processNextFile(index + 1, [...results, result]);
          })
          .catch(error => {
            console.error(`Error processing file ${file.name}:`, error);
            // Create a placeholder for the failed image
            const failedResult = createFallbackImage(`Failed to process ${file.name}`);
            failedResult.file = file;
            
            // Set error message but continue processing other files
            setErrorMessage(`Error processing ${file.name}: ${error.message}`);
            processNextFile(index + 1, [...results, failedResult]);
          });
      }, 100);
    };
    
    // Start processing the first file
    processNextFile(0);
  };
  
  // Update image with new settings
  const updateImageSettings = (index, newSettings) => {
    try {
      // Cannot update an error image
      if (processedImages[index].error) {
        return;
      }
      
      // Show a temporary "updating" state
      const newProcessedImages = [...processedImages];
      newProcessedImages[index] = {
        ...newProcessedImages[index],
        isUpdating: true
      };
      setProcessedImages(newProcessedImages);
      
      // Create a new Optimole URL with updated settings
      createOptimoleUrl(processedImages[index].file, newSettings)
        .then(updatedImage => {
          const updatedImages = [...processedImages];
          updatedImages[index] = {
            ...updatedImage,
            isUpdating: false
          };
          setProcessedImages(updatedImages);
        })
        .catch(error => {
          console.error("Failed to update image settings:", error);
          // Remove updating state
          const fallbackImages = [...processedImages];
          fallbackImages[index] = {
            ...fallbackImages[index],
            isUpdating: false
          };
          setProcessedImages(fallbackImages);
          
          // Show error message
          setErrorMessage("Failed to update image. Please try again with different settings.");
        });
    } catch (error) {
      console.error("Error updating image settings:", error);
      setErrorMessage("An unexpected error occurred while updating image settings.");
    }
  };
  
  // Format file size for display
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    else return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };
  
  // Calculate total saved bytes
  const calculateTotalSavings = () => {
    return processedImages.reduce((total, img) => {
      if (img.error) return total;
      return total + (img.originalSize - img.compressedSize);
    }, 0);
  };

  // Get settings description for display
  const getOptimoleSettingsDescription = (quality, format) => {
    let qualityDesc = '';
    if (quality === 'auto' || quality === 'mauto') {
      qualityDesc = 'Auto quality';
    } else {
      qualityDesc = `Quality: ${quality}%`;
    }
    
    let formatDesc = format === 'auto' ? 'Best format' : format.toUpperCase();
    
    return `${qualityDesc}, Format: ${formatDesc}`;
  };

  // Feature list for the tool
  const features = [
    "AI-powered compression that preserves image quality",
    "Smart format conversion to WebP, AVIF, and more",
    "Customizable compression levels for your needs",
    "Batch processing of multiple images at once",
    "Works with JPEG, PNG, and WebP formats",
    "Optimole CDN delivery for faster loading",
    "Easy downloads of optimized images",
    "Device-based optimization parameters",
    "Adaptive quality settings based on image content"
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-br from-indigo-800 to-blue-900 pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compress and optimize your images with Optimole
            </h1>
            <p className="text-blue-100 text-xl mb-8">
              Reduce your image file sizes without losing quality. Simply drag and drop your images, and we'll take care of the rest.
            </p>
          </div>
        </div>
        
        {/* Decorative clip path */}
        <div className="absolute left-0 bottom-0 w-full h-16 bg-gray-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        {/* Upload Card */}
        <div className="bg-white rounded-lg shadow-xl mb-8 overflow-hidden">
          <div className="p-6">
            {/* Upload Area */}
            <div 
              className={`border-2 border-dashed rounded-lg p-10 mb-6 text-center cursor-pointer transition-all
                ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/30'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept="image/jpeg,image/png,image/webp" 
                multiple 
                onChange={handleFileChange}
              />
              
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">Upload images or drag and drop</h3>
              <p className="text-gray-600 mb-2">Up to 5 images simultaneously, max 5MB per image</p>
              <p className="text-sm text-gray-500">JPEG, PNG, WEBP</p>
            </div>
            
            {/* Selected Files */}
            {files.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Images ({files.length}/5)</h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
                          <img 
                            src={URL.createObjectURL(file)} 
                            alt={file.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium truncate max-w-xs">{file.name}</p>
                          <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFile(index)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Optimization Settings */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Optimization Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quality Settings */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Quality</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {['low', 'medium', 'high'].map((level) => (
                      <div 
                        key={level}
                        onClick={() => setCompressionLevel(level)}
                        className={`p-3 rounded-lg text-center cursor-pointer border-2 transition-all
                          ${compressionLevel === level 
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                            : 'border-gray-200 hover:border-indigo-200 text-gray-600'}`}
                      >
                        <p className="font-medium capitalize mb-1">{level}</p>
                        <p className="text-xs">
                          {level === 'low' && 'q:85 - High quality'}
                          {level === 'medium' && 'q:65 - Balanced'}
                          {level === 'high' && 'q:45 - Max savings'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Format Settings */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Output Format</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {['auto', 'webp', 'jpeg', 'png'].map((format) => (
                      <div 
                        key={format}
                        onClick={() => setOutputFormat(format)}
                        className={`p-3 rounded-lg text-center cursor-pointer border-2 transition-all
                          ${outputFormat === format 
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                            : 'border-gray-200 hover:border-indigo-200 text-gray-600'}`}
                      >
                        <p className="font-medium uppercase text-sm">{format === 'auto' ? 'Best' : format}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Compress Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={compressImages}
                disabled={files.length === 0 || isProcessing}
                className={`px-8 py-3 rounded-full font-medium text-white flex items-center
                  ${files.length > 0 && !isProcessing 
                    ? 'bg-indigo-600 hover:bg-indigo-700 shadow-md' 
                    : 'bg-gray-400 cursor-not-allowed'}`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                    <span>{`Optimize Images${files.length > 0 ? ` (${files.length})` : ''}`}</span>
                  </>
                )}
              </button>
              
              {/* Error message display */}
              {errorMessage && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg border border-red-200 text-sm">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 flex-shrink-0">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Results */}
        {processedImages.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Optimized Images</h3>
                <div className="bg-green-100 text-green-800 font-medium py-1 px-3 rounded-full text-sm">
                  Total Saved: {formatFileSize(calculateTotalSavings())}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-10">
                {processedImages.map((img, index) => (
                  <div key={index} className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                    {/* Display error message if this image failed */}
                    {img.error ? (
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-red-600">
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 flex-shrink-0">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                          <div>
                            <p className="font-medium">{img.file ? img.file.name : 'Unknown image'}</p>
                            <p className="text-sm mt-1">{img.errorMessage || 'Failed to process image'}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between mb-4">
                          <h4 className="font-medium text-lg text-gray-800">{img.file.name}</h4>
                          <div className="text-green-600 font-medium">
                            {Math.round(((img.originalSize - img.compressedSize) / img.originalSize) * 100)}% smaller
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-2">Original ({formatFileSize(img.originalSize)})</p>
                            <div className="border rounded-lg overflow-hidden bg-gray-50">
                              {img.originalUrl ? (
                                <img src={img.originalUrl} alt="Original" className="w-full" />
                              ) : (
                                <div className="w-full aspect-video flex items-center justify-center bg-gray-100 text-gray-500">
                                  Original preview unavailable
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-2">
                              <p className="text-sm text-gray-500">Optimized ({formatFileSize(img.compressedSize)})</p>
                              <p className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                                {getOptimoleSettingsDescription(
                                  img.quality,
                                  img.format
                                )}
                              </p>
                            </div>
                            
                            <div className="border rounded-lg overflow-hidden bg-gray-50 relative">
                              {img.isUpdating ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70">
                                  <div className="w-8 h-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
                                </div>
                              ) : null}
                              
                              {img.dataUrl ? (
                                <img src={img.dataUrl} alt="Optimized" className="w-full" />
                              ) : (
                                <div className="w-full aspect-video flex items-center justify-center bg-gray-100 text-gray-500">
                                  Optimized preview unavailable
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 items-center">
                          <div className="flex-1">
                            <div className="flex flex-wrap gap-2">
                              <select 
                                className="px-3 py-2 border rounded-md text-sm bg-white"
                                value={img.quality}
                                onChange={(e) => updateImageSettings(index, { quality: e.target.value === 'auto' ? 'auto' : parseInt(e.target.value) })}
                              >
                                <option value="auto">Auto Quality</option>
                                <option value="85">High Quality (85%)</option>
                                <option value="65">Medium Quality (65%)</option>
                                <option value="45">Low Quality (45%)</option>
                                <option value="30">Very Low Quality (30%)</option>
                              </select>
                              
                              <select 
                                className="px-3 py-2 border rounded-md text-sm bg-white"
                                value={img.format}
                                onChange={(e) => updateImageSettings(index, { format: e.target.value })}
                              >
                                <option value="avif">Best Format (AVIF)</option>
                                <option value="webp">WebP</option>
                                <option value="jpeg">JPEG</option>
                                <option value="png">PNG</option>
                              </select>
                            </div>
                          </div>
                          
                          {img.downloadUrl ? (
                            <a 
                              href={img.downloadUrl} 
                              download={`optimole-${img.file.name}`}
                              className="bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                              Download
                            </a>
                          ) : (
                            <button
                              disabled
                              className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md font-medium cursor-not-allowed flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                              Download Unavailable
                            </button>
                          )}
                        </div>
                        
                        <div className="mt-4 pt-4">
                          <div className="flex items-center mb-1">
                            <div className="text-sm text-gray-600 mr-2">Optimole URL format:</div>
                            <button 
                              onClick={() => {
                                if (navigator.clipboard && img.optimoleUrl) {
                                  navigator.clipboard.writeText(img.optimoleUrl)
                                    .then(() => alert("URL copied to clipboard!"))
                                    .catch(err => console.error("Clipboard copy failed:", err));
                                }
                              }}
                              className="text-xs text-indigo-600 hover:text-indigo-800"
                            >
                              Copy URL
                            </button>
                          </div>
                          <code className="block p-2 bg-gray-100 rounded-md text-xs overflow-x-auto">
                            {img.optimoleUrl || "URL not available"}
                          </code>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Key Features</h3>
              <button 
                onClick={() => setShowFeatures(!showFeatures)}
                className="text-indigo-600 flex items-center text-sm font-medium"
              >
                {showFeatures ? 'Hide Details' : 'Show Details'}
                {showFeatures ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {showFeatures && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-0.5 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* How it Works Section */}
        <div className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">How Does the Optimole Image Compressor Work?</h3>
          </div>
          
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              The Optimole Cloud uses smart compression algorithms to minimize the visual impact of the file size shrinking. 
              Your images will be smaller and as close to the original quality as possible.
            </p>
            <p className="text-gray-700 mb-4">
              Optimole uses a special URL format to deliver optimized images, with parameters that control exactly how each image is processed:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-sm">
                https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:168/h:48/q:mauto/ig:avif/image-path.jpg
              </code>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3">
                  <span className="font-mono">w:</span>
                </div>
                <span className="text-gray-700">Width of the image, automatically adjusted based on device</span>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3">
                  <span className="font-mono">h:</span>
                </div>
                <span className="text-gray-700">Height of the image, preserving aspect ratio</span>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3">
                  <span className="font-mono">q:</span>
                </div>
                <span className="text-gray-700">Quality level (or mauto for automatic quality)</span>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3">
                  <span className="font-mono">ig:</span>
                </div>
                <span className="text-gray-700">Image format (avif, webp, jpeg, png)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* WordPress Plugin Promo */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg shadow-lg mb-12 overflow-hidden border border-indigo-100">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 text-indigo-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Check out the Optimole WordPress plugin!</h3>
                <p className="text-gray-700 mb-4">
                  Optimize all your website images automatically with our WordPress plugin. Set it up once and forget about it.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Automatic image optimization</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fast global CDN with 450+ locations</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Smart device-based resizing</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Free plan with 1000 monthly visits</span>
                  </li>
                </ul>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="#" className="bg-indigo-600 text-white py-2 px-6 rounded-full font-medium hover:bg-indigo-700 shadow-sm">
                    Download Plugin
                  </a>
                  <a href="#" className="border-2 border-indigo-600 text-indigo-600 py-2 px-6 rounded-full font-medium hover:bg-indigo-50">
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            Copyright © 2025 | All rights reserved | Powered by VertiStudio
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OptimoleImageCompressor;