import { PricingPlan, Addon, FaqItem, FeatureCategory, FeaturesByCategory, Testimonial, Tooltips } from '../types/pricing';

/**
 * Pricing plans data
 */
export const plans: PricingPlan[] = [
  {
    name: "Starter",
    yearlyPrice: "€19.08",
    monthlyPrice: "€23",
    visits: "40,000",
    popular: false,
    new: false,
    idealFor: "Bloggers, portfolios & small business sites",
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
    emailSupport: "Priority",
    liveChat: true,
    customDomain: true,
    onboarding: "30-min call"
  }
];

/**
 * Add-ons data
 */
export const addons: Addon[] = [
  {
    name: "Video Hosting",
    yearlyPrice: "€15.83",
    monthlyPrice: "€19",
    description: "Optimize & transform videos in real-time",
    features: [
      "100GB storage and bandwidth per month",
      "Real-time video optimization",
      "Video transformations API",
      "Compatible with all plans"
    ]
  }
];

/**
 * FAQ items data
 */
export const faqItems: FaqItem[] = [
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

/**
 * Feature categories data
 */
export const featureCategories: FeatureCategory[] = [
  { id: 'optimization', name: 'Image Optimization & Delivery' },
  { id: 'performance', name: 'Performance Features' },
  { id: 'asset', name: 'Digital Asset Management' },
  { id: 'management', name: 'Management & Control' },
  { id: 'analytics', name: 'Analytics & Support' }
];

/**
 * Features by category data
 */
export const features: FeaturesByCategory = {
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

/**
 * Testimonials data
 */
export const testimonials: Testimonial[] = [
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

/**
 * Tooltip content
 */
export const tooltips: Tooltips = {
  autoScaling: "Optimole's auto-scaling automatically resizes images based on each visitor's device, screen size, and connection speed. This ensures optimal performance without manual work."
}; 