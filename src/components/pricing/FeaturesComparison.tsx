import React, { useState, useCallback, memo } from 'react';
import { FeaturesComparisonProps } from '../../types/pricing';
import { uiIcons } from '../../utils/icons';
import Tooltip from '../common/Tooltip';
import { tooltips } from '../../data/pricingData';

/**
 * FeaturesComparison component displays the feature comparison table
 * Memoized to prevent unnecessary re-renders
 */
const FeaturesComparison: React.FC<FeaturesComparisonProps> = ({ 
  featureCategories, 
  features, 
  showAllFeatures, 
  setShowAllFeatures 
}) => {
  const [activeFeatureCategory, setActiveFeatureCategory] = useState<string>('optimization');

  // Memoize event handlers to prevent unnecessary re-renders
  const handleToggleFeatures = useCallback(() => {
    setShowAllFeatures(!showAllFeatures);
  }, [showAllFeatures, setShowAllFeatures]);

  const handleSetCategory = useCallback((categoryId: string) => {
    setActiveFeatureCategory(categoryId);
  }, []);

  const { ChevronUp, ChevronDown, Check } = uiIcons;

  // Add tooltip for specific features only
  const maybeAddTooltip = (featureName: string) => {
    // Check for specific keywords that should have tooltips
    if (featureName.toLowerCase().includes('visits')) {
      return (
        <Tooltip content={tooltips.visits}>
          {featureName}
        </Tooltip>
      );
    } else if (featureName.toLowerCase().includes('image offloading')) {
      return (
        <Tooltip content={tooltips.imageOffloading}>
          {featureName}
        </Tooltip>
      );
    } else if (featureName.toLowerCase().includes('ai-powered') || 
               featureName.toLowerCase().includes('auto scaling')) {
      return (
        <Tooltip content={tooltips.machineCompression}>
          {featureName}
        </Tooltip>
      );
    } else if (featureName.toLowerCase().includes('custom domain') || 
               featureName.toLowerCase().includes('cname')) {
      return (
        <Tooltip content={tooltips.cname}>
          {featureName}
        </Tooltip>
      );
    } else if (featureName.toLowerCase().includes('cloudfront') || 
               featureName.toLowerCase().includes('cdn')) {
      return (
        <Tooltip content={tooltips.cdn}>
          {featureName}
        </Tooltip>
      );
    }
    
    // Return the feature name without a tooltip for all other features
    return featureName;
  };

  // Function to determine if a feature is available for a specific plan
  const getFeatureAvailability = (category: string, feature: string, plan: string): React.ReactNode => {
    // For simplicity, let's assume all features are available in all plans
    // In a real app, you would have a more complex logic here based on feature/plan data
    return (
      <span className="optml-feature-check text-green-500 flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
        </svg>
      </span>
    );
  };

  return (
    <div className="optml-features-comparison mt-12 py-12 bg-gray-50">
      <div className="optml-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="optml-features-header text-center mb-12">
          <h2 className="optml-features-title text-3xl font-bold text-indigo-900 mb-4">Features Comparison</h2>
          <p className="optml-features-description text-gray-700 max-w-2xl mx-auto">
            All plans include our core features. Higher plans add more premium features to help you optimize and manage your images at scale.
          </p>
          
          <button 
            className="optml-toggle-features mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm transition-colors duration-200"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            {showAllFeatures ? 'Show Key Features' : 'Show All Features'}
          </button>
        </div>
        
        <div className="optml-features-table overflow-x-auto bg-white rounded-lg shadow">
          {featureCategories.map((category, idx) => {
            // Get features for this category
            const categoryFeatures = features[category.id];
            
            // Skip if category has no features
            if (!categoryFeatures || categoryFeatures.length === 0) {
              return null;
            }
            
            return (
              <div key={category.id} className={`optml-feature-category ${idx > 0 ? 'border-t border-gray-100' : ''}`}>
                {/* Category Heading */}
                <div className="optml-category-header bg-gray-50 px-6 py-4">
                  <h3 className="optml-category-title text-lg font-bold text-indigo-900">{category.name}</h3>
                </div>
                
                {/* Features List */}
                <div className="optml-feature-list">
                  {categoryFeatures.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx} 
                      className={`optml-feature-row grid grid-cols-1 lg:grid-cols-4 px-6 py-4 ${featureIdx > 0 ? 'border-t border-gray-100' : ''}`}
                    >
                      <div className="optml-feature-name col-span-1 lg:col-span-2 font-medium text-indigo-900 mb-2 lg:mb-0">
                        {maybeAddTooltip(feature)}
                      </div>
                      
                      {/* Starter */}
                      <div className="optml-plan-feature optml-starter text-center mb-2 lg:mb-0">
                        {getFeatureAvailability(category.id, feature, 'Starter')}
                      </div>
                      
                      {/* Business */}
                      <div className="optml-plan-feature optml-business text-center">
                        {getFeatureAvailability(category.id, feature, 'Business')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="optml-cta-section mt-12 text-center">
          <h3 className="optml-cta-title text-2xl font-bold text-indigo-900 mb-4">Ready to supercharge your website's images?</h3>
          <p className="optml-cta-description text-gray-600 mb-8">
            Join thousands of businesses already optimizing their images with Optimole.
          </p>
          <a href="#pricing" className="optml-btn-primary">
            View Pricing Plans
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturesComparison); 