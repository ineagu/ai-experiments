import React, { useState, useCallback, memo } from 'react';
import { FaqProps } from '../../types/pricing';
import { uiIcons } from '../../utils/icons';

/**
 * Reusable FAQ component
 * Memoized to prevent unnecessary re-renders
 */
const Faq: React.FC<FaqProps> = ({ 
  items, 
  title = "Frequently Asked Questions",
  description = "Get answers to the most common questions about Optimole"
}) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // Memoize toggle function to prevent re-creation on each render
  const toggleItem = useCallback((index: number) => {
    setExpandedItem(prevExpanded => prevExpanded === index ? null : index);
  }, []);

  const { ChevronUp, ChevronDown } = uiIcons;

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full px-6 py-4 text-left font-medium bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={expandedItem === index}
              >
                <span>{item.question}</span>
                <span className="text-indigo-600 flex-shrink-0 ml-2">
                  {expandedItem === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {expandedItem === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Faq); 