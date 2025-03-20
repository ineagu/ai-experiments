import React from 'react';
    import ReactDOM from 'react-dom/client';
    import OptimolePricingRedesign from './components/OptimolePricingRedesign';
    import HomePage from './components/HomePage';
    import OptimoleAboutPage from './components/AboutPage';
    import OptimoleImageCompressor from './components/ImageCompression';
    import ContactPage from './components/ContactPage';
    import './index.css';

    // Get template data from WordPress
    const templateData = window.optimoleTemplatesData || {};
    const templateType = templateData.templateType || '';
    
    // Mount the appropriate component based on the template type
    document.addEventListener('DOMContentLoaded', () => {
      // Pricing Page
      const pricingRoot = document.getElementById('optimole-pricing-root');
      if (pricingRoot && (templateType === 'pricing' || !templateType)) {
        ReactDOM.createRoot(pricingRoot).render(
          <React.StrictMode>
            <OptimolePricingRedesign />
          </React.StrictMode>
        );
      }
      
      // Home Page
      const homeRoot = document.getElementById('optimole-home-root');
      if (homeRoot && (templateType === 'home' || !templateType)) {
        ReactDOM.createRoot(homeRoot).render(
          <React.StrictMode>
            <HomePage />
          </React.StrictMode>
        );
      }
      
      // About Page
      const aboutRoot = document.getElementById('optimole-about-root');
      if (aboutRoot && (templateType === 'about' || !templateType)) {
        ReactDOM.createRoot(aboutRoot).render(
          <React.StrictMode>
            <OptimoleAboutPage />
          </React.StrictMode>
        );
      }
      
      // Image Compression Page
      const compressRoot = document.getElementById('optimole-compress-root');
      if (compressRoot && (templateType === 'compress' || !templateType)) {
        ReactDOM.createRoot(compressRoot).render(
          <React.StrictMode>
            <OptimoleImageCompressor />
          </React.StrictMode>
        );
      }
      
      // Contact Page
      const contactRoot = document.getElementById('optimole-contact-root');
      if (contactRoot && (templateType === 'contact' || !templateType)) {
        ReactDOM.createRoot(contactRoot).render(
          <React.StrictMode>
            <ContactPage />
          </React.StrictMode>
        );
      }
    });