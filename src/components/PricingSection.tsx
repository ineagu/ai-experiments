import React from 'react';
import { PricingCard } from './PricingCard';

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    period: "month",
    description: "Perfect for small websites and blogs",
    features: [
      { text: "5K monthly visitors", included: true },
      { text: "Unlimited image optimization", included: true },
      { text: "Basic CDN", included: true },
      { text: "Email support", included: false },
      { text: "Custom domain", included: false },
      { text: "Advanced analytics", included: false },
    ],
    isPopular: false,
  },
  {
    title: "Essential",
    price: "$19",
    period: "month",
    description: "Great for growing businesses",
    features: [
      { text: "25K monthly visitors", included: true },
      { text: "Unlimited image optimization", included: true },
      { text: "Premium CDN", included: true },
      { text: "Priority email support", included: true },
      { text: "Custom domain", included: true },
      { text: "Advanced analytics", included: false },
    ],
    isPopular: true,
  },
  {
    title: "Pro",
    price: "$39",
    period: "month",
    description: "For professional websites and stores",
    features: [
      { text: "100K monthly visitors", included: true },
      { text: "Unlimited image optimization", included: true },
      { text: "Premium CDN", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Custom domain", included: true },
      { text: "Advanced analytics", included: true },
    ],
    isPopular: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4">Simple, transparent pricing</h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include unlimited image optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
} 