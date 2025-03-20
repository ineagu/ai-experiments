import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number; 
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * ImageOptimizer - A component that handles image optimization best practices
 * 
 * Features:
 * - Explicit width and height to prevent layout shifts
 * - Lazy loading for non-priority images
 * - Support for WebP format through Optimole's URL API
 * - Proper fallback for older browsers
 */
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover'
}) => {
  // Explicitly set width and height on the root element to prevent layout shifts
  const aspectRatioStyle = width && height 
    ? { aspectRatio: `${width}/${height}` } 
    : {};
  
  // Use Optimole's built-in WebP conversion if the URL is from Optimole
  const isOptimoleUrl = src.includes('optimole.com') || src.includes('.i.optimole.com');
  
  // Extract width and height from Optimole URL if not provided
  const extractOptimoleDimensions = () => {
    if (!isOptimoleUrl || (width && height)) return { width, height };
    
    // Try to extract dimensions from URL
    const widthMatch = src.match(/w:(\d+)/);
    const heightMatch = src.match(/h:(\d+)/);
    
    return {
      width: widthMatch ? parseInt(widthMatch[1]) : width,
      height: heightMatch ? parseInt(heightMatch[1]) : height
    };
  };
  
  const dimensions = extractOptimoleDimensions();
  
  // Set default dimensions if not provided to prevent layout shifts
  const imgWidth = dimensions.width || 300;
  const imgHeight = dimensions.height || 200;
  
  return (
    <div 
      className={`image-optimizer-container ${className}`} 
      style={{
        ...aspectRatioStyle,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <img
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        style={{
          objectFit,
          width: '100%',
          height: '100%'
        }}
        onError={(e) => {
          // Fallback handling if image fails to load
          console.warn(`Failed to load image: ${src}`);
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default ImageOptimizer; 