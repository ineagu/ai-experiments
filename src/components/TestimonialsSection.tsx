import React from 'react';
import TestimonialCard from './TestimonialCard';

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

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
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
  );
};

export default TestimonialsSection; 