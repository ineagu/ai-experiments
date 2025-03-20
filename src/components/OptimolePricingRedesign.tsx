import React, { useState } from 'react';
import PricingCard from './pricing/PricingCard';
import VideoAddon from './pricing/VideoAddon';
import FeaturesComparison from './pricing/FeaturesComparison';
import HeroSection from './common/HeroSection';
import Faq from './common/Faq';
import TestimonialCard from './TestimonialCard';
import { 
  plans, 
  addons, 
  faqItems, 
  featureCategories, 
  features, 
  testimonials 
} from '../data/pricingData';

/**
 * OptimolePricingRedesign - The main pricing page component using modular components
 */
const OptimolePricingRedesign: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <HeroSection
        title="The Most Powerful Image Optimization Service"
        description="Speed up your site with intelligent image optimization that adapts to every visitor's device."
      >
        {/* Trust Badges */}
        <div className="flex justify-center mt-6 gap-6 flex-wrap">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center shadow-sm">
            <div className="text-yellow-500 mr-2">★★★★★</div>
            <div className="font-semibold text-sm text-white">4.7/5 on WordPress.org</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center shadow-sm">
            <div className="text-yellow-500 mr-2">★★★★★</div>
            <div className="font-semibold text-sm text-white">200,000+ active installs</div>
          </div>
        </div>
      </HeroSection>

      {/* Pricing Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Only pay for the visits your website receives. Unlimited images. Unlimited sites.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`font-semibold ${!isYearly ? 'text-indigo-900' : 'text-gray-500'}`}>Billed Monthly</span>
              <label className="mx-4 relative inline-block w-14 h-7">
                <input 
                  type="checkbox" 
                  className="opacity-0 w-0 h-0" 
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-300 ${isYearly ? 'bg-indigo-600' : 'bg-gray-400'}`}>
                  <span className={`absolute h-5 w-5 bg-white rounded-full transition-all duration-300 top-1 ${isYearly ? 'left-8' : 'left-1'}`}></span>
                </span>
              </label>
              <span className={`font-semibold ${isYearly ? 'text-indigo-900' : 'text-gray-500'}`}>
                Billed Annually
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded">2 MONTHS FREE!</span>
              </span>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mb-12">
            {plans.map((plan, index) => (
              <PricingCard 
                key={index} 
                plan={plan} 
                isYearly={isYearly} 
                index={index} 
              />
            ))}
          </div>
          
          {/* Add-ons Section */}
          <VideoAddon addon={addons[0]} isYearly={isYearly} />
          
          {/* Money Back Guarantee Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-sm py-4 px-6 flex items-center border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <span className="font-semibold text-xl text-indigo-900 block">100% Money Back Guarantee</span>
                <span className="text-sm text-gray-600">We're confident you'll love Optimole. Try it risk-free with our 7-day no-questions-asked refund policy.</span>
              </div>
            </div>
          </div>
          
          {/* Features Comparison */}
          <FeaturesComparison 
            featureCategories={featureCategories}
            features={features}
            showAllFeatures={showAllFeatures}
            setShowAllFeatures={setShowAllFeatures}
          />
        </div>
      </div>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our verified customers who have experienced real results with Optimole's image optimization solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                stat1={testimonial.stat1}
                stat2={testimonial.stat2}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Setup Assistance Highlight */}
      <div className="py-12 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 text-indigo-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Individual Setup Assistance With Every Plan</h3>
                <p className="text-gray-600 mb-4">
                  We know that getting started can be challenging. That's why we offer personalized setup assistance with every plan. Our team will help you integrate Optimole seamlessly with your website, regardless of which plan you choose.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Comprehensive documentation and step-by-step guides</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Email-based setup support for all plans</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dedicated 30-minute onboarding calls for all plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <Faq items={faqItems} />
      
      {/* Final CTA */}
      <div className="py-16 px-4 bg-indigo-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Ready to Accelerate Your Website?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join 200,000+ websites that trust Optimole for blazing-fast image optimization
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="bg-indigo-600 text-white py-3 px-8 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md">
              Choose Your Plan
            </a>
            <a href="#" className="border-2 border-indigo-600 text-indigo-600 py-3 px-8 rounded-full font-medium hover:bg-indigo-50 transition-colors">
              Try For Free
            </a>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">No credit card required for free trial</div>
        </div>
      </div>
    </div>
  );
};

export default OptimolePricingRedesign;