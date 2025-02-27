import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started"
}) => {
  return (
    <div className={`pricing-card relative ${isPopular ? 'border-primary border-2' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white text-small px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-title mb-4">{title}</h3>
      <div className="mb-4">
        <span className="text-display">{price}</span>
        <span className="text-text-gray">/{period}</span>
      </div>
      <p className="text-text-gray mb-6">{description}</p>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIcon className={`w-5 h-5 ${feature.included ? 'text-success' : 'text-gray-300'}`} />
            <span className={feature.included ? 'text-secondary' : 'text-text-gray'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full ${isPopular ? 'btn-primary' : 'btn-secondary'}`}>
        {ctaText}
      </button>
    </div>
  );
} 