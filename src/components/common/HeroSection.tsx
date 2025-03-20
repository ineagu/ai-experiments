import React, { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
  bgClass?: string;
}

/**
 * Reusable hero section component
 */
const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  description, 
  children,
  bgClass = "bg-gradient-to-r from-indigo-700 to-blue-600"
}) => {
  return (
    <div className={`${bgClass} relative overflow-hidden`}>
      {/* Background pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {title}
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 