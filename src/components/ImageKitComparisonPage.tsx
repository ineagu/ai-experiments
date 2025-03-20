import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, Upload, Image, RefreshCw, FileImage, DollarSign } from 'lucide-react';

const ImageKitComparisonPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-blue-600 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Let's compare Optimole with ImageKit
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Optimole is your all-in-one image optimization solution for WordPress & beyond. It processes your images in real-time and is fully cloud-based (it doesn't strain your server).
            </p>
            <div className="flex justify-center">
              <a href="/pricing" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Check pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 uppercase text-sm font-medium tracking-wider mb-8">TRUSTED AND LOVED BY SATISFIED CUSTOMERS</p>
          
          <div className="flex flex-wrap justify-center items-center gap-10">
            <a href="https://www.bluehost.com/" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/bluehost-1.png" alt="Bluehost" className="h-8" />
            </a>
            <a href="https://themeisle.com" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2020/07/themeisle.png" alt="ThemeIsle" className="h-8" />
            </a>
            <a href="https://www.ninjaone.com/" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/ninja-one.png" alt="NinjaOne" className="h-8" />
            </a>
            <a href="https://wid.org/" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/WID.png" alt="WID" className="h-8" />
            </a>
            <a href="https://wpshout.com/" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/06/download.png" alt="WPShout" className="h-8" />
            </a>
            <a href="https://thrivethemes.com/" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/Thrive_themes_.png" alt="Thrive Themes" className="h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* At First Glance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">At First Glance:</h2>
            
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Optimole:</h3>
                <p>
                  Optimole stands out for its automated, efficient image optimization process, including real-time resizing, compression, and best format conversion based on the user's device and browser. This approach, combined with its global CDN, facilitates fast and optimized image delivery, aiming to enhance website performance with minimal effort from the user.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">ImageKit:</h3>
                <p>
                  ImageKit is a comprehensive image management solution offering real-time image optimization, transformation, and delivery. It caters to a broader range of needs, including advanced image editing and analytics. ImageKit is suitable for businesses looking for more control over their image processing and delivery, focusing on customization and detailed performance analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Feature Comparison</h2>
            
            {/* Image Optimization */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Image className="w-6 h-6 mr-2 text-indigo-600" />
                <h3 className="text-2xl font-semibold">Image Optimization Capabilities:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Optimole:</h4>
                  <p>
                    Offers real-time image optimization, including resizing, compression, and format conversion, tailored to the user's device. It excels in automating the optimization process to enhance website performance.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">ImageKit:</h4>
                  <p>
                    Specializes in real-time image optimization, resizing, and format conversion. It provides a similar level of automation in image optimization, focusing on improving website loading times.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Delivery and Performance */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 mr-2 text-indigo-600" />
                <h3 className="text-2xl font-semibold">Delivery and Performance:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Optimole:</h4>
                  <p>
                    Utilizes a global CDN to deliver optimized images rapidly to users worldwide, ensuring enhanced performance and reduced latency.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">ImageKit:</h4>
                  <p>
                    It also employs a CDN for fast image delivery, emphasizing reducing image load times and improving overall website speed.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Advanced Features */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <RefreshCw className="w-6 h-6 mr-2 text-indigo-600" />
                <h3 className="text-2xl font-semibold">Advanced Features:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Optimole:</h4>
                  <p>
                    Optimole goes beyond basic optimization with features like lazy loading, auto-scaling, smart cropping, and the best format selector. It also enables adding watermarks and filters and supports image offloading, enhancing website speed and user experience.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">ImageKit:</h4>
                  <p>
                    ImageKit.io offers extensive editing tools such as overlays, text annotations, collaborative links, AI-powered search, and automated cropping. It is ideal for users who require advanced image manipulation and optimization capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Integration and Usability */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Upload className="w-6 h-6 mr-2 text-indigo-600" />
                <h3 className="text-2xl font-semibold">Integration and Usability:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Optimole:</h4>
                  <p>
                    Optimole offers seamless integration, especially with WordPress, and a user-friendly interface that streamlines the image optimization process for users of varying skill levels. It also supports HTML integration and custom integrations for added flexibility.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">ImageKit:</h4>
                  <p>
                    Offers easy integration with various web platforms and development environments, providing a user-friendly dashboard for managing image optimization settings.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Digital Asset Management */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <FileImage className="w-6 h-6 mr-2 text-indigo-600" />
                <h3 className="text-2xl font-semibold">Digital Asset Management:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Optimole:</h4>
                  <p>
                    Features a comprehensive digital asset management system that allows for efficient management and access to images across multiple sites, enhancing organizational efficiency.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">ImageKit:</h4>
                  <p>
                    ImageKit's DAM features provide a comprehensive and advanced solution for managing digital assets, offering tools for organization, collaboration, security, and integration that are essential for businesses managing large volumes of media. These capabilities make ImageKit a strong option for organizations that require extensive and sophisticated digital asset management functionalities.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <DollarSign className="w-6 h-6 mr-2 text-indigo-600" />
                <h3 className="text-2xl font-semibold">Pricing:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Optimole:</h4>
                  <p>
                    Offers a free plan that supports 1,000 monthly visitors for unlimited images and includes all features except the option to use a custom domain name. Additionally, there are scalable paid plans based on the number of visitors. This model allows for growth and flexibility, catering to small and large websites. The best part is that free and paid plans support unlimited sites and images.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">ImageKit:</h4>
                  <p>
                    ImageKit pricing includes a free tier with basic features and limited usage, as well as paid plans that scale based on image transformations, bandwidth, and storage needs. The service caters to various users with custom solutions for advanced requirements, from individuals to large enterprises. Prices increase with higher usage limits and additional features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Conclusion:</h2>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p>
                In conclusion, while Optimole and ImageKit.io offer robust image optimization and delivery solutions, Optimole excels in automated optimization, ease of use, and performance-enhancing features like lazy loading and auto-scaling. ImageKit.io, on the other hand, stands out for its advanced image editing and manipulation tools, catering to users who need detailed control over their image assets. The choice between the two depends on whether the priority is streamlined, automated image optimization (Optimole), or comprehensive image management with advanced editing capabilities (ImageKit).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-gray-200 rounded-lg w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Gallery image</span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <blockquote className="text-lg italic mb-6">
                    "Easy set up and simple to use! Great result of picture optimization with direct speed – page load result, even in the free version. Works with NextGen Gallery and Facebook widgets. Helpful, fast and knowledgable support! Good job!"
                  </blockquote>
                  <p className="font-semibold">Claudia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start using Optimole</h2>
            <p className="text-xl mb-8">
              Would you like to know more about Optimole and how it helps your site? Our team will be happy to help you integrate Optimole on your website.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/pricing" className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">
                Check pricing
              </a>
              <a href="#" className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition duration-300">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-gray-500">Gallery image</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageKitComparisonPage; 