import React, { memo, useMemo } from 'react';
import { PricingCardProps } from '../../types/pricing';
import Tooltip from '../common/Tooltip';
import { tooltips } from '../../data/pricingData';

/**
 * PricingCard component displays an individual pricing plan
 * Memoized to prevent unnecessary re-renders when other plans change
 */
const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, index }) => {
  // Calculate savings with useMemo to avoid recalculation on every render
  const savings = useMemo(() => {
    if (!isYearly) return null;
    
    const monthlyPrice = parseFloat(plan.monthlyPrice.replace('€', ''));
    const yearlyPrice = parseFloat(plan.yearlyPrice.replace('€', ''));
    const monthlySavings = monthlyPrice - yearlyPrice;
    const yearlySavings = monthlySavings * 12;
    
    return {
      monthly: monthlySavings.toFixed(2),
      yearly: yearlySavings.toFixed(2)
    };
  }, [plan.monthlyPrice, plan.yearlyPrice, isYearly]);
  
  // Calculate display price with useMemo
  const displayPrice = useMemo(() => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  }, [isYearly, plan.yearlyPrice, plan.monthlyPrice]);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden border ${plan.popular ? 'border-indigo-500' : 'border-gray-100'} w-full max-w-sm lg:max-w-none flex-1 transition-all hover:shadow-xl ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
    >
      {/* Card Header */}
      <div className={`relative ${plan.popular ? 'bg-indigo-100' : 'bg-indigo-50'} p-6 text-center`}>
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
            MOST POPULAR
          </div>
        )}
        {plan.new && (
          <div className="absolute top-3 left-0 bg-green-500 text-white text-xs font-semibold py-1 px-3 rounded-r-lg">
            NEW!
          </div>
        )}
        <h3 className="text-xl font-bold text-indigo-900 mb-1">{plan.name.toUpperCase()}</h3>
        <div className="text-3xl font-bold">
          {displayPrice}
          <span className="text-base font-normal">/mo</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          {isYearly ? 'BILLED YEARLY' : 'BILLED MONTHLY'}
        </div>
        {isYearly && savings && (
          <div className="text-xs font-medium text-green-600 mb-2">
            Save €{savings.yearly}/year
          </div>
        )}
        <div className="text-sm italic text-gray-600 mt-3">
          Ideal for {plan.idealFor}
        </div>
        
        {/* Visitor Count */}
        <div className="flex justify-center items-center mt-4 bg-indigo-100 p-2 rounded">
          <Tooltip content={tooltips.visits}>
            <div>
              <span className="text-xl font-bold text-indigo-600 mr-2">{plan.visits}</span>
              <span className="text-sm">Visits Monthly</span>
            </div>
          </Tooltip>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-6 flex flex-col">
        <a href="#" className={`${plan.popular ? 'bg-indigo-700' : 'bg-indigo-600'} text-white text-center py-3 px-4 rounded font-medium hover:bg-indigo-700 transition-colors mb-6`}>
          Get Started
        </a>
        
        {/* Core Features */}
        <div className="mb-6">
          <div className="font-semibold text-indigo-900 mb-3 border-b border-gray-100 pb-2">Core Features</div>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Unlimited Images & Sites</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <Tooltip content={tooltips.imageOffloading}>
                <span>Image Offloading & Storage</span>
              </Tooltip>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <Tooltip content={tooltips.machineCompression}>
                <span>AI-Powered Auto Scaling</span>
              </Tooltip>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <Tooltip content={tooltips.cdn}>
                <span>Cloudfront CDN (450+ locations)</span>
              </Tooltip>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Unmetered Bandwidth</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Smart Cropping for Focal Points</span>
            </div>
          </div>
        </div>
        
        {/* Support Features */}
        <div>
          <div className="font-semibold text-indigo-900 mb-3 border-b border-gray-100 pb-2">Support & Setup</div>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Individual Setup Assistance</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Email Support ({plan.emailSupport})</span>
            </div>
            <div className="flex items-start">
              {plan.liveChat ? (
                <span className="text-green-500 mr-2">✓</span>
              ) : (
                <span className="text-gray-400 mr-2">—</span>
              )}
              <span className={plan.liveChat ? "" : "text-gray-500"}>Live Chat Support</span>
            </div>
            <div className="flex items-start">
              {plan.customDomain ? (
                <span className="text-green-500 mr-2">✓</span>
              ) : (
                <span className="text-gray-400 mr-2">—</span>
              )}
              <span className={plan.customDomain ? "" : "text-gray-500"}>
                <Tooltip content={tooltips.cname}>
                  Custom Domain (CNAME)
                </Tooltip>
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 text-center mt-6">
          {index < 2 ? 'Upgrade anytime as your website grows' : 'Need more? Contact us for custom plans'}
        </div>
      </div>
    </div>
  );
};

export default memo(PricingCard); 