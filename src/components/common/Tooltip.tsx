import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

/**
 * Tooltip component that shows additional info on hover
 */
const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="om-tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <span 
        className={`om-tooltip-inner ${isVisible ? 'visible' : ''}`} 
        dangerouslySetInnerHTML={{ __html: content }}
      ></span>
    </span>
  );
};

export default Tooltip; 