// Define types
interface OMWizardType {
  cdn: string;
  hash: string;
}

// Initialize the global OMWizard object if in browser environment
if (typeof window !== 'undefined') {
  if (!window.OMWizard) {
    window.OMWizard = {
      cdn: 'mlvoslivyghz',  // Default CDN based on Optimole examples
      hash: 'cb:a7JM~41a03'   // Default hash based on Optimole examples
    };
  }
}

// Declare global types
declare global {
  interface Window {
    OMWizard: OMWizardType;
  }
}

// Helper function to get the OMWizard object
export const getOMWizard = (): OMWizardType => {
  if (typeof window !== 'undefined') {
    return window.OMWizard;
  }
  
  // Return default values for non-browser environments (SSR)
  return {
    cdn: 'mlvoslivyghz',
    hash: 'cb:a7JM~41a03'
  };
};

// Function to generate Optimole URLs with proper rs:fill format
export const getOptimoleURL = (image: {
  url: string;
  width: number;
  height: number;
  resizeType: string;
  gravity: string;
  quality: number;
  format: string;
  blur?: number;
  sharpen?: number;
  pixelate?: number;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  noCaching?: boolean; // Add option to disable caching
}): string => {
  const { cdn, hash } = getOMWizard();
  const { 
    url, 
    width, 
    height, 
    resizeType, 
    gravity, 
    quality, 
    format,
    blur, 
    sharpen, 
    pixelate, 
    brightness, 
    contrast, 
    saturation,
    noCaching = false // Default to not adding cache-busting parameter
  } = image;
  
  // Sanitize the URL - Optimole might not handle query params in source URLs correctly
  // Extract the base URL without query parameters
  const baseUrl = url.split('?')[0];
  
  // Format with rs:fill as the primary resize method
  let optimoleURL = `https://${cdn}.i.optimole.com/${hash}/rs:${resizeType}:${width}:${height}/g:${gravity}/q:${quality}/f:${format}`;
  
  // Add optional parameters if they exist and are not zero
  if (blur) optimoleURL += `/bl:${blur}`;
  if (sharpen) optimoleURL += `/sh:${sharpen}`;
  if (pixelate) optimoleURL += `/pix:${pixelate}`;
  if (brightness) optimoleURL += `/br:${brightness}`;
  if (contrast) optimoleURL += `/co:${contrast}`;
  if (saturation) optimoleURL += `/sa:${saturation}`;
  
  // Add the image URL at the end
  optimoleURL += `/${baseUrl}`;
  
  // Add cache-busting parameter if requested
  if (noCaching) {
    const uniqueId = Math.random().toString(36).substring(2, 15) + Date.now();
    optimoleURL += `?t=${uniqueId}`;
  }
  
  // Debug logging to help track URL generation
  console.log('Generated Optimole URL:', optimoleURL);
  
  return optimoleURL;
};

// Helper function to build simple URLs for static images (for use in static components)
export const getSimpleOptimoleURL = (
  url: string, 
  width: number = 0, 
  height: number = 0, 
  quality: string = 'mauto', 
  format: string = 'auto',
  noCaching: boolean = false // Add cache-busting parameter option
): string => {
  const { cdn, hash } = getOMWizard();
  let optimoleURL = `https://${cdn}.i.optimole.com/${hash}`;
  
  // Add width parameter if provided
  if (width > 0) {
    optimoleURL += `/w:${width}`;
  }
  
  // Add height parameter if provided
  if (height > 0) {
    optimoleURL += `/h:${height}`;
  }
  
  // Add quality parameter
  optimoleURL += `/q:${quality}`;
  
  // Add format parameter
  if (format !== 'auto') {
    optimoleURL += `/ig:${format}`;
  } else {
    optimoleURL += `/f:${format}`;
  }
  
  // Add the image URL at the end
  optimoleURL += `/${url}`;
  
  // Add cache-busting parameter if requested
  if (noCaching) {
    const uniqueId = Math.random().toString(36).substring(2, 15) + Date.now();
    optimoleURL += `?t=${uniqueId}`;
  }
  
  return optimoleURL;
};

export default getOptimoleURL; 