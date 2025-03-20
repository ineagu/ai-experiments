/**
 * Pricing plan interface
 */
export interface PricingPlan {
  name: string;
  yearlyPrice: string;
  monthlyPrice: string;
  visits: string;
  popular: boolean;
  new: boolean;
  idealFor: string;
  emailSupport: string;
  liveChat: boolean;
  customDomain: boolean;
  onboarding: string;
}

/**
 * Add-on interface
 */
export interface Addon {
  name: string;
  yearlyPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
}

/**
 * FAQ item interface
 */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Feature category interface
 */
export interface FeatureCategory {
  id: string;
  name: string;
}

/**
 * Testimonial statistic interface
 */
export interface TestimonialStat {
  value: string;
  label: string;
}

/**
 * Testimonial interface
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stat1: TestimonialStat;
  stat2: TestimonialStat;
}

/**
 * Features by category type
 */
export type FeaturesByCategory = {
  [category: string]: string[];
}

/**
 * Tooltips type
 */
export type Tooltips = {
  [key: string]: string;
} 