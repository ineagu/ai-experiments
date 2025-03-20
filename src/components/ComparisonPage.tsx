import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ComparisonPage = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Let's compare Optimole with ShortPixel
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Optimole is your all-in-one image optimization solution for WordPress & beyond. It processes your images in real-time and is fully cloud-based (it doesn't strain your server).
            </p>
            <div className="flex justify-center">
              <a href="https://optimole.com/pricing" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Check pricing
              </a>
            </div>
          </div>
        </div>
      </div>

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

      {/* Comparison Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* At First Glance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">At First Glance:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Optimole</h3>
                <p className="text-gray-700">
                  Offers real-time image optimization, CDN delivery, lazy loading, auto-scaling, and digital asset management. Its all-in-one approach ensures that images are optimized, stored, and delivered efficiently from a single platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">ShortPixel</h3>
                <p className="text-gray-700">
                  Specializes in image compression with support for lossy and lossless optimization. It focuses on reducing image file sizes and converting images to WebP format but lacks broader features like CDN delivery and digital asset management.
                </p>
              </div>
            </div>
          </div>

          {/* Adaptive Image Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Adaptive Image Support:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Optimole</h3>
                <p className="text-gray-700">
                  Optimole seamlessly integrates auto-scaling and adaptive image serving based on the user's device, ensuring optimal size and resolution without additional plugins.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Shortpixel</h3>
                <p className="text-gray-700">
                  In contrast, ShortPixel provides adaptive image support through a separate plugin called Adaptive Images WP Plugin. This plugin allows for image resizing and optimization based on the viewer's screen size but requires an extra step for installation and configuration.
                </p>
              </div>
            </div>
          </div>

          {/* CDN Scalability */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">CDN Scalability:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Optimole</h3>
                <p className="text-gray-700">
                  With no CDN traffic limits, it offers greater scalability and predictability in costs, especially for large-scale or rapidly growing websites. This unlimited bandwidth can accommodate spikes in traffic without additional charges or performance degradation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">ShortPixel</h3>
                <p className="text-gray-700">
                  CDN delivery is available but requires installing an additional plugin (Adaptive Images WP Plugin), and there is a 150-500GB traffic limit depending on the plan. Websites with high traffic or many images need to monitor their usage to stay within this limit.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Pricing:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Optimole</h3>
                <p className="text-gray-700">
                  Offers a free plan that supports 1,000 monthly visitors for unlimited images and includes all features except the option to use a custom domain name. Additionally, there are scalable paid plans based on the number of visitors. This model allows for growth and flexibility, catering to small and large websites. The best part is that free and paid plans support unlimited sites and images.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">ShortPixel</h3>
                <p className="text-gray-700">
                  Offers a free plan along with other options such as "one-time" or unlimited plans on a monthly or yearly basis with credit-based pricing. Users purchase credits consumed with each image optimization, which can be more cost-effective for sites with lower image optimization needs. However, the variety of plans may make choosing the most suitable one challenging.
                </p>
              </div>
            </div>
          </div>

          {/* Image Offloading and Digital Asset Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">Image Offloading and Digital Asset Management (DAM):</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Optimole</h3>
                <p className="text-gray-700">
                  Optimole supports image offloading, allowing you to store all your images on Optimole's cloud (with the option to revert them to your site if needed) and save server space. Additionally, it provides a robust DAM system for centralized image management across multiple sites. With advanced image manipulation features like watermarks and filters, Optimole enables immediate image customization and optimization, enhancing efficiency and branding consistency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">ShortPixel</h3>
                <p className="text-gray-700">
                  ShortPixel, primarily focusing on image compression, lacks a comprehensive Digital Asset Management (DAM) system. This limitation means users cannot access or manage images across multiple sites from a single centralized dashboard. ShortPixel does not offer on-the-go image manipulation features like adding watermarks or filters, restricting the ability to customize and optimize images directly within the platform.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Conclusion:</h2>
            <p className="text-gray-700 text-lg">
              Optimole outshines ShortPixel with its integrated features like unlimited CDN bandwidth, image offloading, and digital asset management, all provided natively. These features enhance website performance and user experience while simplifying asset management. ShortPixel offers robust image compression and adaptive images but requires additional plugins for extended functionality. Optimole's comprehensive approach, offloading, and management capabilities make it a more seamless and scalable solution for businesses prioritizing efficiency and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="wp-block-optimole-testimonial optimole-testimonials-wrap">
            <div className="optimole-testimonial-box active rounded-lg shadow-md p-8 bg-white border border-gray-200 relative">
              <div className="flex items-center mb-6">
                <span className="avatar mr-4">
                  <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:100/h:100/q:mauto/https://optimole.com/uploads/2019/05/example2.jpeg" alt="Claudia" className="w-16 h-16 rounded-full object-cover" />
                </span>
                <div>
                  <div className="om-testimonial-name font-bold text-indigo-700">Claudia</div>
                </div>
              </div>
              <p className="om-testimonial-text text-lg italic text-gray-700 mb-4">
                "Easy set up and simple to use! Great result of picture optimization with direct speed – page load result, even in the free version. Works with NextGen Gallery and Facebook widgets. Helpful, fast and knowledgable support! Good job!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Gallery */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-16 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Start using Optimole</h2>
              <p className="text-xl text-blue-100 mb-8">
                Would you like to know more about Optimole and how it helps your site? Our team will be happy to help you integrate Optimole on your website.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://optimole.com/pricing" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center">
                  Check pricing
                </a>
                <a href="https://calendar.app.google/y58qGfJaSvu3hW616" target="_blank" rel="noreferrer" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                  Schedule a Demo
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 max-w-md mx-auto">
              <div className="wp-block-optimole-grid-gallery optimole-gallery-mosaic">
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square overflow-hidden">
                    <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:74/h:166/q:mauto/https://optimole.com/uploads/2020/06/1.jpg" alt="Gallery image" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:90/h:165/q:mauto/https://optimole.com/uploads/2020/06/2.jpg" alt="Gallery image" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:90/h:114/q:mauto/https://optimole.com/uploads/2020/06/3.jpg" alt="Gallery image" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:111/h:121/q:mauto/https://optimole.com/uploads/2020/06/4.jpg" alt="Gallery image" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden col-span-2">
                    <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:110/h:222/q:mauto/https://optimole.com/uploads/2020/06/5.jpg" alt="Gallery image" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden col-span-2">
                    <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:111/h:322/q:mauto/https://optimole.com/uploads/2020/06/6.jpg" alt="Gallery image" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage; 