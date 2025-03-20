import React, { useState, useEffect } from 'react';
import { Shield, Zap, Cloud, FileImage, Image, Upload, Server, Layers, RefreshCw, Users, Search, Lock, Download, Share } from 'lucide-react';
import OptimoleUrlBuilder from './OptimoleUrlBuilder';
import { getOptimoleURL, getOMWizard } from '../utils/optimole';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('wordpress');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counterValue, setCounterValue] = useState(7695501212);
  
  // Add states for editor widget interactivity
  const [editorWidth, setEditorWidth] = useState(75);
  const [editorQuality, setEditorQuality] = useState(80);
  const [editorFocus, setEditorFocus] = useState('Smart');
  const [editorTab, setEditorTab] = useState('Media API');
  const [previewImage, setPreviewImage] = useState('');
  const [imageSize, setImageSize] = useState('200kb');
  const [sizeReduction, setSizeReduction] = useState(80);
  
  // Create mapping for focus
  const focusMap = {
    'Smart': 'smart',
    'Center': 'center',
    'Top': 'top',
    'Bottom': 'bottom',
    'Left': 'left',
    'Right': 'right'
  };

  useEffect(() => {
    // Calculate scaled width and height
    const scaledWidth = Math.round(1000 * (editorWidth / 100));
    const scaledHeight = Math.round(1000 * (editorWidth / 100));
    
    // Get OMWizard values safely
    const { cdn, hash } = getOMWizard();
    
    // Construct URL using the cb:a7JM~41a03 format with w/h/q parameters
    const newUrl = `https://${cdn}.i.optimole.com/cb:a7JM~41a03/w:${scaledWidth}/h:${scaledHeight}/q:${editorQuality}/https://optimole.com/uploads/2020/07/fp.jpeg`;
    
    setPreviewImage(newUrl);
    
    // Log the exact URL for debugging
    console.log("Direct URL created:", newUrl);
    
    // Calculate image size based on quality, format, and dimensions
    const originalSize = 2000; // KB - base size of the original image
    
    // Quality affects file size (higher quality = larger file)
    const qualityFactor = editorQuality / 100;
    
    // Fixed format efficiency for WebP (default)
    const formatEfficiency = 0.5;
    
    // Dimension factor (smaller dimensions = smaller file)
    const dimensionFactor = (scaledWidth / 1000) * (scaledHeight / 1000);
    
    // Calculate size based on all factors
    const newSize = Math.round(originalSize * qualityFactor * formatEfficiency * dimensionFactor);
    setImageSize(`${newSize}KB`);
    
    // Calculate size reduction percentage
    const reduction = Math.round((1 - (newSize / originalSize)) * 100);
    setSizeReduction(Math.max(20, Math.min(95, reduction)));
  }, [editorWidth, editorQuality, editorFocus]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounterValue(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const testimonials = [
    {
      name: "Hélène",
      position: "Web and Multimedia Development",
      text: "Optimole has the best developer experience of all media optimization plugins I ever used. Their support is reliable; they listen to their community and quickly fix bugs.",
      image: "https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:1080/h:1080/q:mauto/https://optimole.com/uploads/2024/06/IMG_20240208_171640_square_toptal_light-scaled.jpg"
    },
    {
      name: "Georg",
      position: "Travel and Lifestyle Media",
      text: "Optimole does a very good job with no effort on my side. It's been a lifesaver! My photography site loads much faster and I don't have to worry about image sizes.",
      image: "https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:664/h:664/q:mauto/https://optimole.com/uploads/2024/06/georg-berg-photoaidcom-cropped-optimized.jpg"
    },
    {
      name: "Andy Devaney",
      position: "Website Owner",
      text: "Optimole has been a game-changer for my website! The plugin not only optimized my images seamlessly but also enhanced the overall performance of my site.",
      image: "https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:200/h:200/q:mauto/https://optimole.com/uploads/2024/01/andy-optimole.jpeg"
    }
  ];

  // Handle slider changes
  const handleWidthSliderChange = (e) => {
    const newWidth = parseInt(e.target.value, 10);
    setEditorWidth(newWidth);
    console.log("Width changed to:", newWidth);
  };
  
  const handleQualitySliderChange = (e) => {
    const newQuality = parseInt(e.target.value, 10);
    setEditorQuality(newQuality);
    console.log("Quality changed to:", newQuality);
  };
  
  const cycleFocus = () => {
    const focuses = Object.keys(focusMap);
    const currentIndex = focuses.indexOf(editorFocus);
    const nextIndex = (currentIndex + 1) % focuses.length;
    setEditorFocus(focuses[nextIndex]);
    console.log("Focus changed to:", focuses[nextIndex]);
  };

  // Get OMWizard values safely for the preview image
  const { cdn, hash } = getOMWizard();
  const defaultPreviewImage = `https://${cdn}.i.optimole.com/cb:a7JM~41a03/w:800/h:800/q:85/https://optimole.com/uploads/2020/07/fp.jpeg`;

  return (
    <div className="bg-white font-sans">
      {/* Hero Section with enhanced background and pattern */}
      <div className="relative bg-gradient-to-r from-indigo-700 to-blue-600 overflow-hidden">
        {/* Background pattern overlay with better visibility */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>
        
        {/* Trust Badges - Top */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white hover:bg-white/30 transition-colors duration-300">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
            <div className="text-xs font-semibold">99.99% Uptime</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white hover:bg-white/30 transition-colors duration-300">
            <Zap size={14} className="mr-2" />
            <div className="text-xs font-semibold">Enterprise-ready</div>
          </div>
        </div>
        
        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column - Text and CTA */}
            <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 text-white">
              <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 hover:bg-blue-500/40 transition-colors duration-300">
                Powering 200,000+ websites | Developed by Themeisle
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Media Delivery & Management Platform
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Complete media optimization, real-time transformations, and digital asset management for WordPress and beyond.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 text-blue-300 mr-3">
                    <FileImage size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Real-time optimization</h3>
                    <p className="text-sm text-blue-100">Intelligent sizing & format delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 text-blue-300 mr-3">
                    <Cloud size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Global CDN</h3>
                    <p className="text-sm text-blue-100">450+ edge locations worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 text-blue-300 mr-3">
                    <Upload size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Media library</h3>
                    <p className="text-sm text-blue-100">Centralized asset management</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 text-blue-300 mr-3">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WordPress ready</h3>
                    <p className="text-sm text-blue-100">One-click integration</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://dashboard.optimole.com/register/" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center">
                  Try It Free
                </a>
                <a href="https://optimole.com/test-drive" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Test Your Site
                </a>
              </div>
            </div>
            
            {/* Right Column - Interactive Demo */}
            <div className="md:w-1/2">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-2xl border border-white/20 hover:border-white/30 transition-colors duration-300">
                {/* Image Preview Area */}
                <div className="flex rounded-lg overflow-hidden mb-4 h-64 bg-white/10">
                  <div className="w-3/4 relative">
                    <img 
                      src={previewImage || defaultPreviewImage} 
                      alt="Preview" 
                      className="object-contain"
                      style={{ transition: "all 0.5s ease" }}
                      key={previewImage} // Force re-render when URL changes
                    />
                    
                    {/* Processing badge */}
                    <div className="absolute top-3 left-3 bg-indigo-600/80 backdrop-blur-sm text-white py-1 px-2 rounded-full text-xs font-medium">
                      <span className="flex items-center">
                        <RefreshCw size={12} className="mr-1 animate-spin" />
                        Optimizing in real-time
                      </span>
                    </div>
                    
                    {/* Focus point indicator */}
                    {editorFocus !== 'Smart' && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className={`
                          w-8 h-8 border-2 border-yellow-400 rounded-full absolute
                          ${editorFocus === 'Center' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
                          ${editorFocus === 'Top' ? 'top-4 left-1/2 -translate-x-1/2' : ''}
                          ${editorFocus === 'Bottom' ? 'bottom-4 left-1/2 -translate-x-1/2' : ''}
                          ${editorFocus === 'Left' ? 'left-4 top-1/2 -translate-y-1/2' : ''}
                          ${editorFocus === 'Right' ? 'right-4 top-1/2 -translate-y-1/2' : ''}
                        `}></div>
                      </div>
                    )}
                    
                    {/* Size reduction badge */}
                    <div className="absolute bottom-3 right-3 bg-green-600/80 backdrop-blur-sm text-white py-1 px-2 rounded-full text-xs font-medium">
                      <span className="flex items-center">
                        {sizeReduction}% smaller • {imageSize}
                      </span>
                    </div>
                  </div>
                  
                  {/* Controls panel */}
                  <div className="w-1/4 bg-white/5 border-l border-white/10 p-3">
                    <div className="mb-3">
                      <div className="text-xs text-white/70 mb-1 flex justify-between">
                        <span>Width</span>
                        <span>{editorWidth}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={editorWidth}
                        onChange={handleWidthSliderChange}
                        className="w-full h-1.5 rounded-full bg-white/20 appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-xs text-white/70 mb-1 flex justify-between">
                        <span>Quality</span>
                        <span>{editorQuality}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="100" 
                        value={editorQuality}
                        onChange={handleQualitySliderChange}
                        className="w-full h-1.5 rounded-full bg-white/20 appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <div className="text-xs text-white/70 mb-1">Focus</div>
                      <div 
                        className="text-xs text-white bg-white/10 rounded p-1 text-center cursor-pointer hover:bg-white/15 transition-colors duration-300"
                        onClick={cycleFocus}
                      >
                        {editorFocus}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Display the current URL */}
                <div className="mb-4 p-3 bg-gray-800 rounded-lg overflow-x-auto">
                  <p className="text-xs text-white/70 mb-1">Generated URL:</p>
                  <code className="text-xs text-green-400 break-all whitespace-pre-wrap">
                    {previewImage ? previewImage.split('?')[0] : 'No URL generated yet'}
                  </code>
                </div>
                
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-2 rounded-lg transition-colors duration-300 w-full" onClick={() => {
                  // Copy URL to clipboard
                  if (previewImage) {
                    navigator.clipboard.writeText(previewImage);
                    alert('URL copied to clipboard: ' + previewImage);
                  }
                }}>
                  <span className="flex items-center justify-center">
                    <Share size={12} className="mr-1" />
                    Share
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 uppercase text-sm font-medium tracking-wider mb-8">Trusted by 200,000+ websites and growing businesses</p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/bluehost-1.png" alt="Bluehost" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2020/07/themeisle.png" alt="ThemeIsle" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/ninja-one.png" alt="NinjaOne" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/WID.png" alt="WID" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/Thrive_themes_.png" alt="Thrive Themes" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
      
      {/* Counter Stats */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl md:text-5xl font-mono font-bold text-indigo-700 mb-3">{formatNumber(counterValue)}</div>
          <p className="text-lg text-gray-600">Images optimized in real-time through our global network</p>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Take control of your media lifecycle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One platform for optimizing, transforming, managing, and collaborating on all your digital assets
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-200 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('wordpress')}
              className={`py-4 px-6 ${activeTab === 'wordpress' ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            >
              WordPress Integration
            </button>
            <button 
              onClick={() => setActiveTab('media-api')}
              className={`py-4 px-6 ${activeTab === 'media-api' ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Media Processing API
            </button>
            <button 
              onClick={() => setActiveTab('asset-management')}
              className={`py-4 px-6 ${activeTab === 'asset-management' ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Digital Asset Management
            </button>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'media-api' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Media Processing API</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-proof media optimization and transformation</h3>
                <p className="text-gray-600 mb-6">
                  Transform images and videos with a unified URL-based API that supports 50+ real-time manipulations, helping you ship media-rich experiences faster without maintaining multiple variants.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Real-time transformations</h4>
                      <p className="text-gray-600">Change sizes, formats, and quality on the fly with simple URL parameters</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Intelligent format delivery</h4>
                      <p className="text-gray-600">Automatic WebP and AVIF delivery to supported browsers</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Smart optimization</h4>
                      <p className="text-gray-600">Balance visual quality and performance with AI-powered optimization</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full -mr-20 -mt-20"></div>
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-md p-5 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">API Example</span>
                    </div>
                    
                    <pre className="bg-gray-50 p-3 rounded text-xs font-mono overflow-x-auto">
                      {`https://optimole.com/t/example.jpg
?width=800
&height=600
&quality=85
&format=auto
&gravity=smart
`}
                    </pre>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex items-center mb-2">
                        <FileImage size={18} className="text-indigo-600 mr-2" />
                        <span className="text-gray-800 font-medium">Crop & Resize</span>
                      </div>
                      <p className="text-xs text-gray-600">Automatic cropping with focal point detection</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex items-center mb-2">
                        <Layers size={18} className="text-indigo-600 mr-2" />
                        <span className="text-gray-800 font-medium">Video Processing</span>
                      </div>
                      <p className="text-xs text-gray-600">Optimize & transform videos in real-time</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex items-center mb-2">
                        <Zap size={18} className="text-indigo-600 mr-2" />
                        <span className="text-gray-800 font-medium">AI Enhancement</span>
                      </div>
                      <p className="text-xs text-gray-600">Upscale and improve visual quality</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex items-center mb-2">
                        <Cloud size={18} className="text-indigo-600 mr-2" />
                        <span className="text-gray-800 font-medium">Global CDN</span>
                      </div>
                      <p className="text-xs text-gray-600">Lightning-fast delivery worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'asset-management' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                  <div className="border-b border-gray-200 p-4">
                    <div className="flex space-x-4">
                      <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">All Assets</div>
                      <div className="text-gray-500 px-3 py-1 rounded-full text-sm">Recent</div>
                      <div className="text-gray-500 px-3 py-1 rounded-full text-sm">Shared</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="relative mb-6">
                      <Search size={18} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input 
                        type="text"
                        placeholder="Search assets..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="relative group">
                        <img 
                          src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:132/h:128/q:mauto/https://optimole.com/uploads/2020/06/Rectangle-13-1.jpg" 
                          alt="Asset preview" 
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                          <Download size={18} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <img 
                          src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:132/h:236/q:mauto/https://optimole.com/uploads/2020/06/Rectangle-11-1.jpg" 
                          alt="Asset preview" 
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                          <Download size={18} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <img 
                          src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:89/h:158/q:mauto/https://optimole.com/uploads/2020/06/Rectangle-14-1.jpg" 
                          alt="Asset preview" 
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                          <Download size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileImage size={16} className="text-indigo-500 mr-3" />
                          <span className="text-gray-800">product-hero.jpg</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-500 hover:text-indigo-600">
                            <Lock size={14} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-indigo-600">
                            <Users size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileImage size={16} className="text-indigo-500 mr-3" />
                          <span className="text-gray-800">banner-summer.png</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-500 hover:text-indigo-600">
                            <Lock size={14} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-indigo-600">
                            <Users size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Digital Asset Management</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Centralized media management at scale</h3>
                <p className="text-gray-600 mb-6">
                  From product images and videos to marketing assets and sales materials, Optimole helps keep your asset repository centralized, organized, and accessible as you grow.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Centralized asset storage</h4>
                      <p className="text-gray-600">Keep all your digital assets in one secure, accessible location</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Team collaboration</h4>
                      <p className="text-gray-600">Share assets securely with internal teams and external stakeholders</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">AI-powered search</h4>
                      <p className="text-gray-600">Find the right assets quickly with intelligent tagging and search</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'wordpress' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">WordPress Integration</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">One-click optimization for WordPress</h3>
                <p className="text-gray-600 mb-6">
                  Our WordPress plugin seamlessly integrates with your site, automatically optimizing all your images in real-time without changing your workflow.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Auto-optimization</h4>
                      <p className="text-gray-600">Automatically optimize all images as they're uploaded to your site</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Device-aware resizing</h4>
                      <p className="text-gray-600">Intelligently resize images based on visitor's device and screen size</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Lazy loading</h4>
                      <p className="text-gray-600">Only load images when they come into view for faster page load</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800">
                    Learn more about WordPress integration
                    <svg className="ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-indigo-100 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  {/* Removed broken image */}
                  
                  <div className="flex space-x-3 mb-4">
                    <div className="flex-1 bg-green-100 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-green-700">80%</div>
                      <div className="text-sm text-green-600">Smaller Images</div>
                    </div>
                    
                    <div className="flex-1 bg-blue-100 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-blue-700">2x</div>
                      <div className="text-sm text-blue-600">Faster Load Time</div>
                    </div>
                    
                    <div className="flex-1 bg-purple-100 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-purple-700">A+</div>
                      <div className="text-sm text-purple-600">PageSpeed Score</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center text-green-600 mb-2">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Compatible with all themes and page builders</span>
                    </div>
                    <div className="flex items-center text-green-600 mb-2">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Works with WooCommerce product images</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">5-minute setup, no technical skills needed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Features Comparison */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More than an image optimizer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimole combines the best of image optimization with powerful digital asset management
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Zap size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">Image Optimization</h3>
                </div>
                
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Intelligent format conversion (WebP/AVIF)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Adaptive quality based on device & connection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Real-time resizing for any screen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Lazy loading with zero JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Global CDN with 450+ edge locations</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Cloud size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">Media API</h3>
                </div>
                
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">50+ image transformations via URL</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Video optimization and transformations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Smart cropping with focal point detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Dynamic watermarking and overlays</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">AI-powered image enhancements</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Layers size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">Digital Asset Management</h3>
                </div>
                
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Centralized media library for all assets</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Custom folder organization and tagging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Team collaboration with access controls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">AI-powered search and auto-tagging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Secure sharing with external stakeholders</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Customer Success</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by businesses worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small WordPress sites to large enterprise media libraries, see why companies choose Optimole
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-indigo-700 text-white p-8">
                <blockquote className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-indigo-500 opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-xl font-medium mb-8">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <footer className="mt-4">
                      <div className="flex items-center">
                        <img 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-medium">{testimonials[activeTestimonial].name}</div>
                          <div className="text-indigo-200">{testimonials[activeTestimonial].position}</div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </blockquote>
                
                <div className="flex space-x-3 mt-8">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-white' : 'bg-indigo-500'}`}
                      aria-label={`View testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What our customers achieve</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">80%</div>
                    <div className="text-lg font-medium text-gray-900">Smaller images</div>
                    <p className="text-gray-600 text-sm mt-2">Advanced compression with optimal quality retention</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">2x</div>
                    <div className="text-lg font-medium text-gray-900">Faster load times</div>
                    <p className="text-gray-600 text-sm mt-2">Dramatic performance improvements across all device types</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">40%</div>
                    <div className="text-lg font-medium text-gray-900">Lower bounce rates</div>
                    <p className="text-gray-600 text-sm mt-2">Better user experience leads to improved engagement</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">60%</div>
                    <div className="text-lg font-medium text-gray-900">Time saved</div>
                    <p className="text-gray-600 text-sm mt-2">Streamlined workflows and automated optimization</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Read customer stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Take control of your media lifecycle</h2>
            <p className="text-xl text-blue-100 mb-10">
              Join 200,000+ websites delivering optimized media experiences with Optimole
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://dashboard.optimole.com/register/" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center shadow-md">
                Start Free Trial
              </a>
              <a href="https://optimole.com/pricing/" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center">
                View Pricing
              </a>
            </div>
            
            <p className="text-blue-200 mt-6">No credit card required • Free tier available</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage; 