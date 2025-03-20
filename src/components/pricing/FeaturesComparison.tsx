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

  return (
    <>
      {/* Compare All Features Button */}
      <div className="text-center mb-8">
        <button 
          onClick={handleToggleFeatures}
          className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
        >
          {showAllFeatures ? 'Hide All Features' : 'Compare All Features'}
          {showAllFeatures ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
        </button>
      </div>
      
      {/* All Features Comparison */}
      {showAllFeatures ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Features Comparison</h3>
          
          {/* Feature Categories Tabs */}
          <div className="flex flex-wrap justify-center mb-6 gap-2">
            {featureCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSetCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFeatureCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Features Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 w-1/3">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-indigo-700 bg-indigo-50 rounded-t-lg">Business</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features[activeFeatureCategory]?.map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-3 px-4 font-medium text-gray-700">
                      {maybeAddTooltip(feature)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Check className="w-5 h-5 mx-auto text-green-500" />
                    </td>
                    <td className="py-3 px-4 text-center bg-indigo-50">
                      <Check className="w-5 h-5 mx-auto text-green-500" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Check className="w-5 h-5 mx-auto text-green-500" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Check className="w-5 h-5 mx-auto text-green-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(FeaturesComparison); 