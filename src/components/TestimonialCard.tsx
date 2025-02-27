import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  stat1?: {
    value: string;
    label: string;
  };
  stat2?: {
    value: string;
    label: string;
  };
  isVerified?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  stat1,
  stat2,
  isVerified = true
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
      <div className="flex-grow">
        <div className="mb-6 text-text-gray text-lg leading-relaxed">
          "{quote}"
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-primary font-bold text-lg mr-3">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-secondary">{name}</p>
            <div className="flex items-center">
              <p className="text-text-gray text-sm">{role}</p>
              {isVerified && (
                <div className="flex items-center ml-2 text-xs text-success">
                  <CheckCircle size={14} className="mr-1" />
                  <span>Verified buyer</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {(stat1 || stat2) && (
          <div className="flex mt-4 pt-4 border-t border-light-gray">
            {stat1 && (
              <div className="mr-6">
                <p className="text-primary font-bold text-xl">{stat1.value}</p>
                <p className="text-text-gray text-sm">{stat1.label}</p>
              </div>
            )}
            {stat2 && (
              <div>
                <p className="text-primary font-bold text-xl">{stat2.value}</p>
                <p className="text-text-gray text-sm">{stat2.label}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard; 