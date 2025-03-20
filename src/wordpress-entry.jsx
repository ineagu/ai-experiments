import React from 'react';
import ReactDOM from 'react-dom/client';
import OptimolePricingRedesign from './components/OptimolePricingRedesign';
import HomePage from './components/HomePage';
import OptimoleAboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DAMPage from './components/DAMPage';
import ComparisonPage from './components/ComparisonPage';
import WordPressPluginPage from './components/WordPressPluginPage';
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
  
  // Compression/Compare Page
  const compareRoot = document.getElementById('optimole-compare-root');
  if (compareRoot && (templateType === 'compare' || !templateType)) {
    ReactDOM.createRoot(compareRoot).render(
      <React.StrictMode>
        <ComparisonPage />
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
  
  // DAM Page
  const damRoot = document.getElementById('optimole-dam-root');
  if (damRoot && (templateType === 'dam' || !templateType)) {
    ReactDOM.createRoot(damRoot).render(
      <React.StrictMode>
        <DAMPage />
      </React.StrictMode>
    );
  }
  
  // WordPress Plugin Page
  const wpRoot = document.getElementById('optimole-wordpress-root');
  if (wpRoot && (templateType === 'wordpress' || !templateType)) {
    ReactDOM.createRoot(wpRoot).render(
      <React.StrictMode>
        <WordPressPluginPage />
      </React.StrictMode>
    );
  }
});