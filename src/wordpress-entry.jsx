import React from 'react';
import ReactDOM from 'react-dom/client';
import OptimolePricingRedesign from './components/OptimolePricingRedesign';
import HomePage from './components/HomePage';
import OptimoleAboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DAMPage from './components/DAMPage';
import ComparisonPage from './components/ComparisonPage';
import WordPressPluginPage from './components/WordPressPluginPage';
import ImageKitComparisonPage from './components/ImageKitComparisonPage';
import './index.css';

// Log to check if the file is loaded
console.log('WordPress entry file loaded');

// Define global render functions for each component
// These functions can be called from shortcodes
window.optimoleRenderPricing = function(containerId) {
  console.log(`Rendering pricing component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <OptimolePricingRedesign />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for pricing component`);
  }
};

window.optimoleRenderHome = function(containerId) {
  console.log(`Rendering home component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <HomePage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for home component`);
  }
};

window.optimoleRenderAbout = function(containerId) {
  console.log(`Rendering about component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <OptimoleAboutPage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for about component`);
  }
};

window.optimoleRenderCompare = function(containerId) {
  console.log(`Rendering compare component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <ComparisonPage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for compare component`);
  }
};

window.optimoleRenderContact = function(containerId) {
  console.log(`Rendering contact component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <ContactPage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for contact component`);
  }
};

window.optimoleRenderDAM = function(containerId) {
  console.log(`Rendering DAM component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <DAMPage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for DAM component`);
  }
};

window.optimoleRenderWordPress = function(containerId) {
  console.log(`Rendering WordPress component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <WordPressPluginPage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for WordPress component`);
  }
};

window.optimoleRenderImageKit = function(containerId) {
  console.log(`Rendering ImageKit component in #${containerId}`);
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <ImageKitComparisonPage />
      </React.StrictMode>
    );
  } else {
    console.error(`Container #${containerId} not found for ImageKit component`);
  }
};

// Get template data from WordPress
const templateData = window.optimoleTemplatesData || {};
const templateType = templateData.templateType || '';

console.log('WordPress template data:', templateData);
console.log('Template type:', templateType);

// Mount the appropriate component based on the template type
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, attempting to mount components');
  
  // Pricing Page
  const pricingRoot = document.getElementById('optimole-pricing-root');
  console.log('Pricing root element:', pricingRoot);
  if (pricingRoot && (templateType === 'pricing' || !templateType)) {
    console.log('Mounting pricing component');
    ReactDOM.createRoot(pricingRoot).render(
      <React.StrictMode>
        <OptimolePricingRedesign />
      </React.StrictMode>
    );
  }
  
  // Home Page
  const homeRoot = document.getElementById('optimole-home-root');
  console.log('Home root element:', homeRoot);
  if (homeRoot && (templateType === 'home' || !templateType)) {
    console.log('Mounting home component');
    ReactDOM.createRoot(homeRoot).render(
      <React.StrictMode>
        <HomePage />
      </React.StrictMode>
    );
  }
  
  // About Page
  const aboutRoot = document.getElementById('optimole-about-root');
  console.log('About root element:', aboutRoot);
  if (aboutRoot && (templateType === 'about' || !templateType)) {
    console.log('Mounting about component');
    ReactDOM.createRoot(aboutRoot).render(
      <React.StrictMode>
        <OptimoleAboutPage />
      </React.StrictMode>
    );
  }
  
  // Compression/Compare Page
  const compareRoot = document.getElementById('optimole-compare-root');
  console.log('Compare root element:', compareRoot);
  if (compareRoot && (templateType === 'compare' || !templateType)) {
    console.log('Mounting compare component');
    ReactDOM.createRoot(compareRoot).render(
      <React.StrictMode>
        <ComparisonPage />
      </React.StrictMode>
    );
  }
  
  // Contact Page
  const contactRoot = document.getElementById('optimole-contact-root');
  console.log('Contact root element:', contactRoot);
  if (contactRoot && (templateType === 'contact' || !templateType)) {
    console.log('Mounting contact component');
    ReactDOM.createRoot(contactRoot).render(
      <React.StrictMode>
        <ContactPage />
      </React.StrictMode>
    );
  }
  
  // DAM Page
  const damRoot = document.getElementById('optimole-dam-root');
  console.log('DAM root element:', damRoot);
  if (damRoot && (templateType === 'dam' || !templateType)) {
    console.log('Mounting DAM component');
    ReactDOM.createRoot(damRoot).render(
      <React.StrictMode>
        <DAMPage />
      </React.StrictMode>
    );
  }
  
  // WordPress Plugin Page
  const wpRoot = document.getElementById('optimole-wordpress-root');
  console.log('WordPress plugin root element:', wpRoot);
  if (wpRoot && (templateType === 'wordpress' || !templateType)) {
    console.log('Mounting WordPress plugin component');
    ReactDOM.createRoot(wpRoot).render(
      <React.StrictMode>
        <WordPressPluginPage />
      </React.StrictMode>
    );
  }

  // ImageKit Comparison Page
  const imagekitRoot = document.getElementById('optimole-imagekit-root');
  console.log('ImageKit comparison root element:', imagekitRoot);
  if (imagekitRoot && (templateType === 'imagekit' || !templateType)) {
    console.log('Mounting ImageKit comparison component');
    ReactDOM.createRoot(imagekitRoot).render(
      <React.StrictMode>
        <ImageKitComparisonPage />
      </React.StrictMode>
    );
  }

  // If no templates matched, try mounting all components
  if (!templateType) {
    console.log('No specific template type found, trying to mount all components');
    try {
      // Try rendering components unconditionally if root elements exist
      document.querySelectorAll('.optimole-component-container').forEach(container => {
        console.log('Found container:', container.id);
      });
    } catch (e) {
      console.error('Error mounting fallback components:', e);
    }
  }
});