import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const OptimolePricingRedesign = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [activeFeatureCategory, setActiveFeatureCategory] = useState('optimization');

  // Mock data
  const plans = [
    {
      name: "Starter",
      yearlyPrice: "€19.08",
      monthlyPrice: "€23",
      visits: "40,000",
      popular: false,
      new: false,
      idealFor: "Bloggers, portfolios & small business sites",
      videoSize: "50MB per video",
      emailSupport: "12-24h",
      liveChat: false,
      customDomain: false,
      onboarding: "30-min call"
    },
    {
      name: "Business",
      yearlyPrice: "€39.08",
      monthlyPrice: "€47",
      visits: "100,000",
      popular: true,
      new: false,
      idealFor: "Growing eCommerce stores & agency sites",
      videoSize: "200MB per video",
      emailSupport: "12h",
      liveChat: true,
      customDomain: true,
      onboarding: "30-min call"
    },
    {
      name: "Growth",
      yearlyPrice: "€69.08",
      monthlyPrice: "€83",
      visits: "250,000",
      popular: false,
      new: true,
      idealFor: "High-traffic sites, media-rich stores & membership sites",
      videoSize: "500MB per video",
      emailSupport: "Priority",
      liveChat: true,
      customDomain: true,
      onboarding: "30-min call"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How many images I can optimize with each plan?",
      answer: "With Optimole, you can optimize an unlimited number of images on all plans. Our pricing is based solely on the number of monthly visitors to your website, not the number of images you have."
    },
    {
      question: "What happens if I exceed plan limits?",
      answer: "If you exceed your plan's monthly visitor limit, your images will continue to be served optimized without interruption. We'll notify you about the overage, and you'll have the option to upgrade to a higher plan or pay for the additional visitors as a one-time fee."
    },
    {
      question: "What Content Delivery Network (CDN) do you use?",
      answer: "Optimole uses Amazon CloudFront, one of the world's most reliable and fastest CDNs with over 450 edge locations globally. This ensures your optimized images are delivered with lightning speed to visitors anywhere in the world."
    },
    {
      question: "Does Optimole automatically serve WebP for Chrome users?",
      answer: "Yes! Optimole automatically detects browser capabilities and serves the most optimal format. Chrome, Edge, Firefox, and Opera users will receive WebP images, while browsers supporting AVIF will get that even more efficient format."
    },
    {
      question: "What does 'Custom Domain' mean?",
      answer: "By default, optimized images are served from Optimole's domain. With Custom Domain support, you can serve images from a subdomain of your own website using a CNAME record. This provides better branding and can improve SEO by keeping all assets on your domain."
    },
    {
      question: "What is auto-scaling?",
      answer: "Auto-scaling automatically adjusts image sizes based on visitor's device capabilities, screen size, and connection speed. This ensures your images are perfectly sized for every device without you having to create multiple image versions manually, saving bandwidth and improving load times."
    }
  ];

  // Feature categories
  const featureCategories = [
    { id: 'optimization', name: 'Image Optimization & Delivery' },
    { id: 'performance', name: 'Performance Features' },
    { id: 'asset', name: 'Digital Asset Management' },
    { id: 'management', name: 'Management & Control' },
    { id: 'analytics', name: 'Analytics & Support' }
  ];

  // Features by category
  const features = {
    optimization: [
      "Real-time optimization based on visitor's exact device specifications",
      "ML-powered compression with quality-preserving algorithms",
      "Automatic WebP & AVIF format conversion",
      "CloudFront CDN with 450+ global edge locations",
      "Unlimited images on all plans with unmetered bandwidth",
      "Dynamic quality adjustment based on visitor's connection speed",
      "Precise responsive image sizing (not fixed breakpoints)",
      "Retina display optimization with exact DPR matching",
      "Smart cropping that preserves image focal points",
      "Custom watermarking with position, opacity, and size controls",
      "Original image preservation in cloud storage"
    ],
    performance: [
      "jQuery-free lazy loading implementation",
      "Customizable colored lazy-load placeholders",
      "Content-shift prevention during page load",
      "Automatic optimization without manual intervention",
      "WooCommerce gallery optimization",
      "Priority loading for above-the-fold/hero images",
      "Zero server-side processing load",
      "Cache-plugin compatibility (WP Rocket, W3 Total Cache, etc.)",
      "Seamless integration with page builders (Elementor, Beaver, Divi)"
    ],
    asset: [
      "Cloud-based media library with storage offloading",
      "Cross-site image sharing between your websites",
      "Cloud image editing capabilities (crop, resize, adjust)",
      "Direct WordPress editor integration",
      "Elementor builder integration for cloud assets",
      "Support for video, audio, and document file types",
      "Centralized media management dashboard"
    ],
    management: [
      "One-click setup with automatic configuration",
      "Website performance scanner with improvement metrics",
      "Selective optimization (include/exclude specific images)",
      "Multiple compression level options (auto, high, medium, low)",
      "White-labeling capabilities (Business+ plans)",
      "Custom domain integration via CNAME support",
      "Clean removal option with original images preserved"
    ],
    analytics: [
      "Real-time bandwidth and storage saving statistics",
      "Optimization analytics dashboard",
      "Email support with plan-based response times",
      "Live chat support (Business+ plans)",
      "Dedicated account manager (Enterprise)",
      "WordPress multisite compatibility"
    ]
  };

  // Tooltip content
  const tooltips = {
    autoScaling: "Optimole's auto-scaling automatically resizes images based on each visitor's device, screen size, and connection speed. This ensures optimal performance without manual work."
  };
  
  // Toggle tooltip visibility
  const toggleTooltip = (id) => {
    if (activeTooltip === id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(id);
    }
  };

  // Toggle FAQ item
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  // Set active feature category
  const setFeatureCategory = (categoryId) => {
    setActiveFeatureCategory(categoryId);
  };

  // Testimonials data
  const testimonials = [
    {
      quote: "I tried several image optimization plugins, but Optimole is the only one that solved all my problems. Their device-based optimization is a game-changer for my eCommerce site with thousands of product images.",
      name: "Marcus T.",
      role: "eCommerce Store Owner",
      stat1: {
        value: "82%",
        label: "Image Size Reduction"
      },
      stat2: {
        value: "+24%",
        label: "Conversion Rate"
      }
    },
    {
      quote: "Optimole drastically reduced our page load times which directly impacted our SEO rankings. We're now ranking higher for our target keywords and seeing more organic traffic.",
      name: "Sarah J.",
      role: "Digital Marketing Manager",
      stat1: {
        value: "65%",
        label: "Faster Load Times"
      },
      stat2: {
        value: "+18",
        label: "SERP Positions Gained"
      }
    },
    {
      quote: "The ability to automatically optimize and lazy load images on the fly has made our website incredibly faster. Our customers are now spending more time browsing our content.",
      name: "David L.",
      role: "Media Site Owner",
      stat1: {
        value: "3.2x",
        label: "Page Speed Improvement"
      },
      stat2: {
        value: "+37%",
        label: "Time on Site"
      }
    },
    {
      quote: "As a photographer, I was hesitant about using an automatic optimization tool for my portfolio. But Optimole preserves image quality while significantly reducing file sizes.",
      name: "Elena M.",
      role: "Professional Photographer",
      stat1: {
        value: "70%",
        label: "Size Reduction"
      },
      stat2: {
        value: "99.8%",
        label: "Quality Retention"
      }
    },
    {
      quote: "The WordPress integration is flawless. I installed it and forgot about it - now my WooCommerce store runs noticeably faster and customers complete purchases without abandoning carts.",
      name: "Robert K.",
      role: "WooCommerce Store Owner",
      stat1: {
        value: "41%",
        label: "Cart Abandonment Reduction"
      },
      stat2: {
        value: "+32%",
        label: "Revenue Increase"
      }
    },
    {
      quote: "Our team of content creators can focus on producing quality content without worrying about image optimization. Optimole handles everything automatically with outstanding results.",
      name: "Jennifer P.",
      role: "Content Director",
      stat1: {
        value: "15hrs",
        label: "Weekly Time Saved"
      },
      stat2: {
        value: "100%",
        label: "Team Satisfaction"
      }
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <span className="ml-2 text-xl font-bold text-indigo-900">Optimole</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center py-12 px-4 bg-indigo-50">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">The Most Powerful Image Optimization Service</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Speed up your site with intelligent image optimization that adapts to every visitor's device.
        </p>
        
        {/* Trust Badges */}
        <div className="flex justify-center mt-6 gap-6 flex-wrap">
          <div className="bg-white rounded-full px-4 py-2 flex items-center shadow-sm">
            <div className="text-yellow-500 mr-2">★★★★★</div>
            <div className="font-semibold text-sm">4.7/5 on WordPress.org</div>
          </div>
          <div className="bg-white rounded-full px-4 py-2 flex items-center shadow-sm">
            <div className="text-yellow-500 mr-2">★★★★★</div>
            <div className="font-semibold text-sm">200,000+ active installs</div>
          </div>
        </div>
      </div>

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
              <div 
                key={index} 
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
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-base font-normal">/mo</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    {isYearly ? 'BILLED YEARLY' : 'BILLED MONTHLY'}
                  </div>
                  {isYearly && (
                    <div className="text-xs font-medium text-green-600 mb-2">
                      Save €99.90/year
                    </div>
                  )}
                  <div className="text-sm italic text-gray-600 mt-3">
                    Ideal for {plan.idealFor}
                  </div>
                  
                  {/* Visitor Count */}
                  <div className="flex justify-center items-center mt-4 bg-indigo-100 p-2 rounded">
                    <span className="text-xl font-bold text-indigo-600 mr-2">{plan.visits}</span>
                    <span className="text-sm">Visits Monthly</span>
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
                        <span>Image Offloading & Storage</span>
                      </div>
                      <div className="flex items-start relative">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>AI-Powered Auto Scaling</span>
                        <button onClick={() => toggleTooltip('autoScaling')} className="ml-1 focus:outline-none">
                          <Info size={16} className="text-indigo-400" />
                        </button>
                        {activeTooltip === 'autoScaling' && (
                          <div className="absolute left-0 mt-6 z-10 w-64 p-3 bg-white text-gray-700 text-sm shadow-lg rounded border border-gray-200">
                            {tooltips.autoScaling}
                          </div>
                        )}
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="font-medium text-indigo-600">Video Optimization ({plan.videoSize})</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Cloudfront CDN (450+ locations)</span>
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
                        <span className={plan.customDomain ? "" : "text-gray-500"}>Custom Domain (CNAME)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 text-center mt-6">
                    {index < 2 ? 'Upgrade anytime as your website grows' : 'Need more? Contact us for custom plans'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
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
          
          {/* Compare All Features Button */}
          <div className="text-center mb-8">
            <button 
              onClick={() => setShowAllFeatures(!showAllFeatures)}
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
                      onClick={() => setFeatureCategory(category.id)}
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
                
                {/* Feature List */}
                <div className="space-y-2">
                  {features[activeFeatureCategory].map((feature, index) => (
                    <div 
                      key={index} 
                      className={`py-2 px-4 flex items-start ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <Check size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Testimonials Section - Replacing "Why Choose Optimole?" */}
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
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about Optimole
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span className="text-indigo-600">
                    {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
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
      
      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center flex-wrap gap-8 mb-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Product</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Documentation</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Service Status</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            Copyright © 2025 | All rights reserved | Powered by VertiStudio
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OptimolePricingRedesign;