/**
 * Types for pricing plans and components
 */

/**
 * Pricing plan structure
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
 * Add-on product structure
 */
export interface Addon {
  name: string;
  yearlyPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
}

/**
 * FAQ item structure
 */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Feature category structure
 */
export interface FeatureCategory {
  id: string;
  name: string;
}

/**
 * Features by category structure
 */
export interface FeaturesByCategory {
  [key: string]: string[];
}

/**
 * Testimonial statistic structure
 */
export interface TestimonialStat {
  value: string;
  label: string;
}

/**
 * Testimonial structure
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stat1: TestimonialStat;
  stat2: TestimonialStat;
}

/**
 * Props for PricingCard component
 */
export interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  index: number;
}

/**
 * Props for VideoAddon component
 */
export interface VideoAddonProps {
  addon: Addon;
  isYearly: boolean;
}

/**
 * Props for FeaturesComparison component
 */
export interface FeaturesComparisonProps {
  featureCategories: FeatureCategory[];
  features: FeaturesByCategory;
  showAllFeatures: boolean;
  setShowAllFeatures: (show: boolean) => void;
}

/**
 * Props for HeroSection component
 */
export interface HeroSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

/**
 * Props for Faq component
 */
export interface FaqProps {
  items: FaqItem[];
  title?: string;
  description?: string;
}

/**
 * Props for TestimonialCard component
 */
export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  stat1: TestimonialStat;
  stat2: TestimonialStat;
}

/**
 * Tooltip content structure
 */
export interface Tooltips {
  [key: string]: string;
} 