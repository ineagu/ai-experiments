import React, { useState, useCallback, memo } from 'react';
import { FeaturesComparisonProps } from '../../types/pricing';
import { uiIcons } from '../../utils/icons';

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
      {showAllFeatures && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-4 bg-indigo-50 border-b border-gray-200">
            <h3 className="font-bold text-indigo-900 text-lg">All Features Comparison</h3>
          </div>
          <div className="p-4">
            {/* Feature Categories */}
            <div className="flex flex-wrap border-b border-gray-200 mb-4">
              {featureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleSetCategory(category.id)}
                  className={`px-4 py-2 mr-2 mb-2 rounded-t-lg transition-colors ${
                    activeFeatureCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="py-3 px-4 font-semibold text-gray-900 text-center">Starter</th>
                    <th className="py-3 px-4 font-semibold text-gray-900 text-center">Business</th>
                    <th className="py-3 px-4 font-semibold text-gray-900 text-center">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {features[activeFeatureCategory].map((feature, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b`}>
                      <td className="py-2 px-4 text-gray-800">{feature}</td>
                      <td className="py-2 px-4 text-center">
                        <Check size={18} className="text-green-500 inline-block" />
                      </td>
                      <td className="py-2 px-4 text-center">
                        <Check size={18} className="text-green-500 inline-block" />
                      </td>
                      <td className="py-2 px-4 text-center">
                        <Check size={18} className="text-green-500 inline-block" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(FeaturesComparison); 