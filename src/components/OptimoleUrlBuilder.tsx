import React, { useState, useEffect } from 'react';
import { getOptimoleURL, getOMWizard } from '../utils/optimole';

// Define TypeScript interfaces
interface OptimoleImage {
  url: string;
  width: number;
  height: number;
  resizeType: string;
  gravity: string;
  quality: number;
  format: string;
  blur: number;
  sharpen: number;
  pixelate: number;
  brightness: number;
  contrast: number;
  saturation: number;
}

const OptimoleUrlBuilder: React.FC = () => {
  // Get initial CDN and hash from the utility
  const initialOMWizard = getOMWizard();

  // Default image state
  const [image, setImage] = useState<OptimoleImage>({
    url: 'example.com/image.jpg',
    width: 800,
    height: 600,
    resizeType: 'fill',
    gravity: 'center',
    quality: 80,
    format: 'auto',
    blur: 0,
    sharpen: 0,
    pixelate: 0,
    brightness: 0,
    contrast: 0,
    saturation: 0
  });

  // CDN and hash state
  const [cdn, setCdn] = useState<string>(initialOMWizard.cdn);
  const [hash, setHash] = useState<string>(initialOMWizard.hash);

  // Generated URL
  const [generatedUrl, setGeneratedUrl] = useState<string>('');

  // Sample image preview
  const [previewImage, setPreviewImage] = useState<string>('');

  // Update the window.OMWizard when cdn or hash changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.OMWizard = {
        ...window.OMWizard,
        cdn,
        hash
      };
    }
  }, [cdn, hash]);

  // Generate URL when any parameter changes
  useEffect(() => {
    const url = getOptimoleURL(image);
    setGeneratedUrl(url);
    
    // For preview, use a real image URL if the user has entered example.com
    if (image.url === 'example.com/image.jpg') {
      // Create a copy of the image object but override the URL with a sample image
      const previewImageData = {
        ...image,
        url: 'https://optimole.com/uploads/2020/07/fp.jpeg'
      };
      setPreviewImage(getOptimoleURL(previewImageData));
    } else {
      setPreviewImage(url);
    }
  }, [image, cdn, hash]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For numeric values, parse as numbers
    if (
      [
        'width', 
        'height', 
        'blur', 
        'sharpen', 
        'pixelate', 
        'brightness', 
        'contrast', 
        'saturation'
      ].includes(name)
    ) {
      setImage({
        ...image,
        [name]: parseInt(value, 10) || 0
      });
    } else {
      setImage({
        ...image,
        [name]: value
      });
    }
  };

  // List of resize types
  const resizeTypes = ['fill', 'fit', 'auto', 'crop'];
  
  // List of gravity options
  const gravityOptions = ['center', 'north', 'south', 'east', 'west', 'northeast', 'northwest', 'southeast', 'southwest', 'smart'];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Optimole URL Builder</h3>
        <p className="text-gray-600 mb-6">Build and preview Optimole image transformations in real-time</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left column - Settings */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CDN Subdomain</label>
                <input
                  type="text"
                  name="cdn"
                  value={cdn}
                  onChange={(e) => setCdn(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hash</label>
                <input
                  type="text"
                  name="hash"
                  value={hash}
                  onChange={(e) => setHash(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (without domain)</label>
                <input
                  type="text"
                  name="url"
                  value={image.url}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
                  <input
                    type="number"
                    name="width"
                    value={image.width}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                  <input
                    type="number"
                    name="height"
                    value={image.height}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resize Type</label>
                <select
                  name="resizeType"
                  value={image.resizeType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {resizeTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gravity</label>
                <select
                  name="gravity"
                  value={image.gravity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {gravityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Middle column - More Settings */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blur (0-100)</label>
                <input
                  type="range"
                  name="blur"
                  min="0"
                  max="100"
                  value={image.blur}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm">{image.blur}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sharpen (0-100)</label>
                <input
                  type="range"
                  name="sharpen"
                  min="0"
                  max="100"
                  value={image.sharpen}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm">{image.sharpen}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pixelate (0-100)</label>
                <input
                  type="range"
                  name="pixelate"
                  min="0"
                  max="100"
                  value={image.pixelate}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm">{image.pixelate}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Brightness (-100 to 100)</label>
                <input
                  type="range"
                  name="brightness"
                  min="-100"
                  max="100"
                  value={image.brightness}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm">{image.brightness}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contrast (-100 to 100)</label>
                <input
                  type="range"
                  name="contrast"
                  min="-100"
                  max="100"
                  value={image.contrast}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm">{image.contrast}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Saturation (-100 to 100)</label>
                <input
                  type="range"
                  name="saturation"
                  min="-100"
                  max="100"
                  value={image.saturation}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="text-center text-sm">{image.saturation}</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Preview and Generated URL */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  {previewImage ? (
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="max-h-full max-w-full object-contain"
                      onError={() => setPreviewImage('')} 
                    />
                  ) : (
                    <div className="text-gray-400">Preview not available</div>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Generated URL</label>
                <div className="relative">
                  <textarea
                    readOnly
                    value={generatedUrl}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 text-xs font-mono"
                  />
                  <button
                    onClick={() => navigator.clipboard?.writeText(generatedUrl)}
                    className="absolute right-2 top-2 bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                <p>Tip: Modify parameters above to see the URL update in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimoleUrlBuilder; 