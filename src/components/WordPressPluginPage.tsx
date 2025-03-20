import React from 'react';
import { FileImage, Cloud, Zap, Shield, RefreshCw, Image, Server, Download } from 'lucide-react';

const WordPressPluginPage = () => {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>

        {/* Trust Badges */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white hover:bg-white/30 transition-colors duration-300">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
            <div className="text-xs font-semibold">200K+ Active Installs</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white hover:bg-white/30 transition-colors duration-300">
            <Shield size={14} className="mr-2" />
            <div className="text-xs font-semibold">5-Star Rating</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white md:pr-12 mb-10 md:mb-0">
              <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 hover:bg-blue-500/40 transition-colors duration-300">
                Official WordPress Plugin | 100% Free
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Optimize your images automatically with Optimole
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                All-in-one image optimization solution for WordPress & beyond. It processes your images in real-time and it's fully cloud-based.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <a href="https://wordpress.org/plugins/optimole-wp/" target="_blank" rel="noreferrer" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center">
                  Download from WordPress.org
                </a>
                <a href="https://optimole.com/pricing" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                  See Premium Plans
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              {/* Image Gallery with mosaic layout */}
              <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                <div className="col-span-1 h-40 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:88/h:164/q:mauto/https://optimole.com/uploads/2020/07/1.jpg" 
                    alt="Gallery image" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <div className="h-24 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                    <img 
                      src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:106/h:197/q:mauto/https://optimole.com/uploads/2020/07/2.jpg" 
                      alt="Gallery image" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-14 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                    <img 
                      src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:106/h:111/q:mauto/https://optimole.com/uploads/2020/07/3.jpg" 
                      alt="Gallery image" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-2 h-32 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:131/h:133/q:mauto/https://optimole.com/uploads/2020/07/4.jpg" 
                    alt="Gallery image" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-1 h-32 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:131/h:204/q:mauto/https://optimole.com/uploads/2020/07/5.jpg" 
                    alt="Gallery image" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">Why use Optimole?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Optimole is your all-in-one image optimization solution for WordPress & beyond. It processes your images in real time and it's fully cloud-based. Optimole goes a lot further than any other tool in the market:
        </p>

        <div className="grid md:grid-cols-2 gap-6 bg-indigo-50 p-8 rounded-2xl">
          <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 mr-4 p-3 bg-indigo-100 rounded-lg text-indigo-600">
              <FileImage size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">Automatic Optimization</h3>
              <p className="text-gray-600">Optimole takes your images and optimizes them automatically without any manual work needed.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 mr-4 p-3 bg-indigo-100 rounded-lg text-indigo-600">
              <Cloud size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">Global CDN Network</h3>
              <p className="text-gray-600">Serves images via a fast image CDN with 450+ edge locations worldwide for optimal delivery.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 mr-4 p-3 bg-indigo-100 rounded-lg text-indigo-600">
              <Image size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">Responsive Images</h3>
              <p className="text-gray-600">Picks the right image size for the visitor's browser and viewport for optimal performance.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 mr-4 p-3 bg-indigo-100 rounded-lg text-indigo-600">
              <RefreshCw size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">Lazy Loading</h3>
              <p className="text-gray-600">Only loads images when they're visible in the viewport, reducing initial page load time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">What happens once you install Optimole</h2>
              <p className="text-gray-600 mb-4">
                Instead of compressing images locally and then replacing them in your media library permanently, Optimole does everything in the cloud.
              </p>
              <p className="text-gray-600">
                Once you activate the plugin, Optimole fetches your images and does all of its optimization magic in real-time.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:243/h:259/q:mauto/ig:avif/https://optimole.com/uploads/2020/07/L-4.svg" 
                  alt="Cloud optimization illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Optimole always serves the perfect version of the image</h2>
              <p className="text-gray-600 mb-4">
                Taking into account the visitor's device, browser, and screen size.
              </p>
              <p className="text-gray-600">
                This means that your visitor will always see the perfect version of the image that's been tailor-tuned for them individually.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:243/h:259/q:mauto/ig:avif/https://optimole.com/uploads/2020/07/L-2-1.svg" 
                  alt="Responsive images illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Your images will be served from a CDN and not from the main server</h2>
              <p className="text-gray-600 mb-4">
                This reduces load times and your bandwidth usage.
              </p>
              <p className="text-gray-600">
                Compressing images is just the tip of the iceberg. Optimole makes your website much faster overall!
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:243/h:259/q:mauto/ig:avif/https://optimole.com/uploads/2020/07/L-1-1.svg" 
                  alt="CDN server illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-16 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need more?</h2>
              <p className="text-xl text-blue-100 mb-4">
                The free Optimole plugin allows you to optimize unlimited number of images in the limit of 1,000 visits per month.
              </p>
              <p className="text-xl text-blue-100 mb-8">
                If that's not enough for you, consider one of our premium plans. Apart from the specs bump, you also get some cool additional features!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://optimole.com/pricing" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center">
                  See Premium Plans
                </a>
                <a href="https://optimole.com/test-drive" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                  Test Your Website
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              {/* Gallery of optimized images */}
              <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                <div className="col-span-1 h-40 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:74/h:166/q:mauto/https://optimole.com/uploads/2020/07/1-1.jpg" 
                    alt="Gallery image" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <div className="h-24 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                    <img 
                      src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:90/h:165/q:mauto/https://optimole.com/uploads/2020/07/2-1.jpg" 
                      alt="Gallery image" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-14 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                    <img 
                      src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:90/h:113/q:mauto/https://optimole.com/uploads/2020/07/3-1.jpg" 
                      alt="Gallery image" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-2 h-32 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:111/h:121/q:mauto/https://optimole.com/uploads/2020/07/4-1.jpg" 
                    alt="Gallery image" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-1 h-32 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:111/h:222/q:mauto/https://optimole.com/uploads/2020/07/5-1.jpg" 
                    alt="Gallery image" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-indigo-600 mb-2">
                  <Download size={32} className="mx-auto" />
                </div>
                <div className="text-3xl font-bold text-indigo-700 mb-1">200,000+</div>
                <div className="text-gray-500">Active Installations</div>
              </div>
              
              <div>
                <div className="text-indigo-600 mb-2">
                  <Zap size={32} className="mx-auto" />
                </div>
                <div className="text-3xl font-bold text-indigo-700 mb-1">50%+</div>
                <div className="text-gray-500">Average Speed Improvement</div>
              </div>
              
              <div>
                <div className="text-indigo-600 mb-2">
                  <Image size={32} className="mx-auto" />
                </div>
                <div className="text-3xl font-bold text-indigo-700 mb-1">7.6B+</div>
                <div className="text-gray-500">Images Optimized Monthly</div>
              </div>
              
              <div>
                <div className="text-indigo-600 mb-2">
                  <Shield size={32} className="mx-auto" />
                </div>
                <div className="text-3xl font-bold text-indigo-700 mb-1">4.9/5</div>
                <div className="text-gray-500">WordPress.org Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPressPluginPage; 