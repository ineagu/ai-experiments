import React from 'react';
import { Addon } from '../../data/types';

interface VideoAddonProps {
  addon: Addon;
  isYearly: boolean;
}

/**
 * VideoAddon component displays the video hosting add-on
 */
const VideoAddon: React.FC<VideoAddonProps> = ({ addon, isYearly }) => {
  // Sendinblue form link for video hosting waitlist
  const waitlistUrl = "https://sibforms.com/serve/MUIFAOz6yT7Bk7oUoOYRM8pswFNbKT-NBKdn7p2Gb0rK_sl82AL2FHmRIKT4dz-NgVFGoGoxKHPjbqxLYaFaSDT1bWkAt6Y9O3EnliyBHlqKHfJAmIZMLYOXu6i-aQPYvkLChX9YuJuSbSqyVqIVJHRhRxM_kUgI1iZnKVS7rEHFqs79u6AM8vFTJbcCCmioU2zlToSax1c7iVk8";
  
  return (
    <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-indigo-900">Video Hosting Add-on</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Add video hosting capabilities to any plan with 100GB of bandwidth and real-time optimization.
          </p>
          <ul className="space-y-2 mb-6">
            {addon.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a 
            href={waitlistUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden inline-block text-center bg-indigo-600 text-white py-2 px-4 rounded font-medium hover:bg-indigo-700 transition-colors"
          >
            Join the waitlist
          </a>
        </div>
        <div className="md:w-1/2 bg-indigo-50 p-8 flex flex-col justify-center items-center text-center">
          <div className="text-sm font-medium text-indigo-700">Video Hosting starts at</div>
          <div className="flex items-center justify-center mt-2">
            <span className="text-4xl font-bold text-indigo-900">
              {isYearly ? addon.yearlyPrice : addon.monthlyPrice}
            </span>
            <span className="text-gray-600 ml-2">/mo</span>
          </div>
          {isYearly && (
            <div className="text-sm font-medium text-green-600 mt-1 mb-4">
              Save €38.04/year
            </div>
          )}
          <div className="text-sm text-gray-600 mb-6">
            billed {isYearly ? 'annually' : 'monthly'}
          </div>
          <a 
            href={waitlistUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-block text-center bg-indigo-600 text-white py-2 px-6 rounded font-medium hover:bg-indigo-700 transition-colors w-full max-w-xs"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoAddon; 