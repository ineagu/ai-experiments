import React from 'react';
import { Shield, Users, Heart, Coffee, Globe, Gift, Zap, Code, BookOpen } from 'lucide-react';


const OptimoleAboutPage = () => {
  return (
    <div className="bg-light-gray font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-display font-bold text-white mb-6 leading-tight">
              Our Vision in Focus
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              The story of how we're transforming the digital image landscape one pixel at a time
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Journey */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Journey</span>
              <h2 className="text-3xl font-bold text-secondary mb-6">The Birth of Clearer Vision</h2>
              <p className="text-lg text-text-gray mb-6">
                In 2018, as website speed became increasingly critical, our team at Codeinwp noticed a consistent problem: images were slowing down the web. Websites were getting heavier, load times longer, and users more impatient.
              </p>
              <p className="text-lg text-text-gray mb-6">
                We embarked on a mission to solve this universal challenge. After months of development, Optimole was first launched on September 11, 2018 – a cloud-based service designed to automatically optimize every image on a website in real-time, without compromising quality.
              </p>
              <p className="text-lg text-text-gray">
                What started as part of Codeinwp's ecosystem of WordPress tools quickly grew into a powerful standalone service, powered by a dedicated team passionate about making the web faster and more efficient for over 10 million users worldwide.
              </p>
            </div>
            <div className="md:w-1/2 relative overflow-hidden">
              <img 
                src="/ai-experiments/images/about/team-working.jpg" 
                alt="Optimole team at work" 
                className="rounded-2xl shadow-card w-full max-h-[500px] object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Mission</span>
            <h2 className="text-3xl font-bold text-secondary mb-6">Making the Visual Web Faster for Everyone</h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We're dedicated to making image optimization accessible to everyone, regardless of technical expertise or budget.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-card overflow-hidden p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-text-gray mb-6">
                  At Optimole, we believe that everyone deserves a fast website. Images make up approximately 50% of an average webpage's weight, yet many website owners lack the tools or knowledge to properly optimize them.
                </p>
                <p className="text-lg text-text-gray mb-6">
                  Our mission is to democratize image optimization by providing an intelligent, cloud-based solution that works quietly in the background – delivering perfectly sized, compressed images to every visitor, on every device, with our free plan supporting up to 1,000 monthly visits.
                </p>
                <p className="text-lg text-text-gray">
                  We're not just saving bandwidth – we're helping businesses deliver better user experiences, improve their SEO rankings, and reduce their environmental impact through more efficient data transfer powered by over 450 global CDN locations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-light-gray rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">80% Size Reduction</h3>
                  <p className="text-text-gray">
                    Our ML algorithms achieve up to 80% size reduction without quality loss
                  </p>
                </div>
                
                <div className="bg-light-gray rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Adaptive Serving</h3>
                  <p className="text-text-gray">
                    Images tailored to each visitor's device, browser, and screen size
                  </p>
                </div>
                
                <div className="bg-light-gray rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Smart Lazy Loading</h3>
                  <p className="text-text-gray">
                    Defers offscreen images to improve initial page load times
                  </p>
                </div>
                
                <div className="bg-light-gray rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Modern Formats</h3>
                  <p className="text-text-gray">
                    Support for WebP and AVIF for better compression and quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Growth Journey */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-2/5">
              <div className="relative overflow-hidden">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                <img 
                  src="/ai-experiments/images/about/dashboard-evolution.jpg" 
                  alt="Optimole Dashboard Evolution" 
                  className="rounded-2xl shadow-card relative z-10 w-full max-h-[500px] object-contain"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Growth</span>
              <h2 className="text-3xl font-bold text-secondary mb-6">From Simple Plugin to Complete Media Platform</h2>
              <p className="text-lg text-text-gray mb-6">
                What started as a WordPress plugin has evolved into a comprehensive media delivery and management platform. Our journey has been shaped by listening closely to our users and responding to their needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-1">WordPress Plugin Launch (September 2018)</h3>
                    <p className="text-text-gray">
                      Our initial product provided simple image optimization for WordPress sites, quickly gaining popularity for its ease of use and automatic compression capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-1">Amazon CloudFront CDN Integration</h3>
                    <p className="text-text-gray">
                      We established a powerful global CDN with over 450 edge locations powered by Amazon CloudFront to deliver optimized images at lightning speed worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-1">Machine Learning-Based Optimization</h3>
                    <p className="text-text-gray">
                      We implemented advanced ML algorithms to determine optimal compression levels for each image, achieving up to 80% size reduction without noticeable quality loss.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-1">Advanced Format Support</h3>
                    <p className="text-text-gray">
                      We expanded our capabilities to support modern image formats like WebP and AVIF, offering better compression rates compared to traditional JPEG and PNG formats.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-1">Enhanced Compatibility</h3>
                    <p className="text-text-gray">
                      We ensured compatibility with popular page builders like Elementor and Beaver Builder, as well as the WordPress 5.0 block editor, making our solution versatile for various website setups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Community Contribution */}
      <div className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Community</span>
            <h2 className="text-3xl font-bold text-secondary mb-6">Contributing to a Better Web</h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We believe in giving back to the communities that have supported our growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">WordPress Core Contributions</h3>
                <p className="text-text-gray mb-4">
                  Our team actively contributes to WordPress core, submits patches, and develops open-source tools for developers through our parent company, Codeinwp.
                </p>
                <p className="text-text-gray">
                  We've added patches to core, helped with translation, and reviewed themes to strengthen the WordPress ecosystem.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Coffee size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">WordCamp Sponsorships</h3>
                <p className="text-text-gray mb-4">
                  We've sponsored WordCamps in Bucharest and Pune, and partnered with WordCamp Europe to provide media coverage in 2018 and 2019.
                </p>
                <p className="text-text-gray">
                  Every year, you'll find our team organizing and volunteering at WordCamp Europe and various WordPress meetups worldwide.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Gift size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">1% for the Planet</h3>
                <p className="text-text-gray mb-4">
                  By reducing data transfer through image optimization, we're helping create a more sustainable internet infrastructure while consuming less energy.
                </p>
                <p className="text-text-gray">
                  As part of our corporate family, we contribute to the 1% for the Planet initiative, supporting environmental causes and sustainable technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Team</span>
            <h2 className="text-3xl font-bold text-secondary mb-6">The People Behind Optimole</h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We're a diverse team of developers, designers, and support specialists united by our passion for web performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-card bg-white text-center">
              <img 
                src="/ai-experiments/images/about/team-member-1.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center top' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">John Smith</h3>
                <p className="text-primary mb-4">Product Lead</p>
                <p className="text-text-gray">
                  Leading product development with 10+ years of experience in web optimization technologies.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-card bg-white text-center">
              <img 
                src="/ai-experiments/images/about/team-member-2.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center top' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Sara Johnson</h3>
                <p className="text-primary mb-4">Lead Developer</p>
                <p className="text-text-gray">
                  Translating complex technical requirements into elegant, efficient code with a focus on performance.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-card bg-white text-center">
              <img 
                src="/ai-experiments/images/about/team-member-3.jpg" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center top' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Michael Chen</h3>
                <p className="text-primary mb-4">Customer Success</p>
                <p className="text-text-gray">
                  Ensuring our customers get the most out of Optimole with responsive support and clear documentation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-text-gray mb-8">
              Our team spans multiple countries and includes experts in image processing, cloud infrastructure, and WordPress development.
            </p>
            <div className="inline-block">
              <img 
                src="/api/placeholder/800/400" 
                alt="Optimole Team at WordCamp Europe" 
                className="rounded-2xl shadow-card w-full max-w-[800px] h-auto"
              />
              <p className="text-sm text-text-gray mt-4">Our team at WordCamp Europe, 2023</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Values</span>
            <h2 className="text-3xl font-bold text-secondary mb-6">What Drives Our Innovation</h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Our core values shape everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Cloud-Based Performance</h3>
              <p className="text-text-gray">
                We handle all the heavy lifting in the cloud, reducing strain on your server while delivering the fastest possible experience. Our Amazon CloudFront CDN ensures global speed for all users.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">WordPress Integration</h3>
              <p className="text-text-gray">
                As part of the Codeinwp and Themeisle ecosystem of WordPress tools since 2018, we're committed to seamless integration with WordPress, popular page builders, and the block editor.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Automation First</h3>
              <p className="text-text-gray">
                We believe in solutions that work on autopilot. With a simple setup process, Optimole handles image optimization automatically, requiring minimal configuration while delivering maximum results.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Optimize Your Images Today</h2>
            <p className="text-xl text-white/90 mb-10">
              Join over 10 million people who trust our WordPress solutions. Get started with our free plan supporting up to 1,000 monthly visits.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#" className="bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center shadow-md">
                Download Free Plugin
              </a>
              <a href="#" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center">
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimoleAboutPage;