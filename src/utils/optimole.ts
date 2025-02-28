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

// Function to generate Optimole URLs
export const getOptimoleURL = (image: {
  url: string;
  width: number;
  height: number;
  resizeType: string;
  gravity: string;
  blur: number;
  sharpen: number;
  pixelate: number;
  brightness: number;
  contrast: number;
  saturation: number;
}): string => {
  const { cdn, hash } = getOMWizard();
  const { url, width, height, resizeType, gravity, blur, sharpen, pixelate, brightness, contrast, saturation } = image;
  return `https://${cdn}.i.optimole.com/${hash}/rs:${resizeType}:${width}:${height}/g:${gravity}/bl:${blur}/sh:${sharpen}/pix:${pixelate}/br:${brightness}/co:${contrast}/sa:${saturation}/${url}`;
};

export default getOptimoleURL; 