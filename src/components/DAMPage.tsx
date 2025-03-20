import React from 'react';
import { FileImage, Cloud, Zap, Shield, Folder, Edit, Upload, Server, Download, Image, Search } from 'lucide-react';

const DAMPage: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans">
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
            <div className="text-xs font-semibold">Enterprise Ready</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white hover:bg-white/30 transition-colors duration-300">
            <Shield size={14} className="mr-2" />
            <div className="text-xs font-semibold">Secure Storage</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white md:pr-12 mb-10 md:mb-0">
              <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 hover:bg-blue-500/40 transition-colors duration-300">
                Optimole Digital Asset Management
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Digital Asset Management<br />Solution by Optimole
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Effortless Control, Seamless Organization, and Simplified Media Management for Your Files
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://dashboard.optimole.com/register/" className="bg-white text-indigo-700 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center">
                  Sign up for Free
                </a>
                <a href="https://calendar.app.google/y58qGfJaSvu3hW616" target="_blank" rel="noreferrer noopener" className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
                  Schedule a Demo
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 overflow-hidden shadow-2xl">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:1024/h:563/q:mauto/https://optimole.com/uploads/2024/01/DAM-hero.png" 
                  alt="Digital Asset Management Hero" 
                  className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
              <Upload size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">1. Upload and Store</h3>
            <p className="text-gray-600">Upload various types of assets and store them in a central location.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
              <Edit size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">2. Manage and Edit</h3>
            <p className="text-gray-600">Manage assets within folders and edit them within Optimole.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
              <Image size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">3. Optimize</h3>
            <p className="text-gray-600">Serve optimized and responsive images using Optimole.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
              <Cloud size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">4. Deliver</h3>
            <p className="text-gray-600">Deliver optimized images via CDN from over 450 locations.</p>
          </div>
        </div>
      </div>

      {/* Folder System Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:1024/h:705/q:mauto/https://optimole.com/uploads/2024/01/folder-management.png" 
                  alt="Folder management" 
                  className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Organize Your Digital Assets Using Our Folder System</h2>
              <p className="text-gray-600 text-lg mb-6">
                Categorizing your assets has always been a bit complex. With our folder and subfolder system, you can create customized hierarchies to match your needs, access images within each folder, create new folders or subfolders on the fly and directly upload images to maintain neatly organized digital assets.
              </p>
              <div className="flex items-center text-indigo-600">
                <Folder size={20} className="mr-2" />
                <span className="font-medium">Custom hierarchies for your needs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:1024/h:783/q:mauto/https://optimole.com/uploads/2024/01/on-the-go-customization.png" 
                  alt="On-the-go customization" 
                  className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Take Control of Your Image Assets with Customization</h2>
              <p className="text-gray-600 text-lg mb-6">
                Optimole Digital Asset Management (DAM) empowers you to fine-tune your assets perfectly. Enhance your images with filters, adjust height and width, resize as needed, and brand them with watermarks. All this and more are easily accessible in Optimole's intuitive one-click editing suite.
              </p>
              <div className="flex items-center text-indigo-600">
                <Edit size={20} className="mr-2" />
                <span className="font-medium">Intuitive one-click editing suite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Cards */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-14 text-indigo-700">Powerful Features for Your Asset Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <FileImage size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Image URLs</h3>
              <p className="text-gray-600">Receive ready-to-use URLs for fast, CDN-powered delivery, ideal for embedding and ensuring a smoother experience.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Search and browse</h3>
              <p className="text-gray-600">Optimole Search brings targeted asset discovery to your fingertips – No more endless scrolling, digging, or frustration.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <Upload size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Upload Multiple File Types</h3>
              <p className="text-gray-600">Manage various file types, including images, videos, audio, documents, and more, all from one central Optimole location.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-blue-600 p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <Folder size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Bulk Assets Moving</h3>
              <p className="text-gray-600">You can quickly move multiple files at once, greatly simplifying, rearranging, and categorizing large volumes of assets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Central Management Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:1024/h:920/q:mauto/https://optimole.com/uploads/2024/01/upload-at-one-central-space.png" 
                  alt="Central management" 
                  className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Upload, Store, and Manage Digital Assets Together in One Central Place</h2>
              <p className="text-gray-600 text-lg mb-6">
                Optimole Digital Asset Management (DAM) revolutionizes how you manage web assets across multiple sites. It's a centralized, user-friendly platform for effortless uploading, storing, and managing digital assets. Ideal for both single and multiple websites, Optimole simplifies your workflow by automatically organizing assets into domain-specific folders. This ensures easy access and efficient management.
              </p>
              <div className="flex items-center text-indigo-600">
                <Upload size={20} className="mr-2" />
                <span className="font-medium">Centralized platform for all your digital assets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WordPress Integration Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:1024/h:725/q:mauto/https://optimole.com/uploads/2024/01/wp-integration.png" 
                  alt="WordPress integration" 
                  className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Integrate with <strong>WordPress</strong></h2>
              <p className="text-gray-600 text-lg mb-6">
                Optimole seamlessly integrates with WordPress, providing direct access to your assets within the WordPress Blocks Editor and Elementor Editor. Edit, resize, and enhance images with ease. Organize diverse media types in a clean Cloud Library dashboard with folders for efficient categorization. Simplify your WordPress workflow and optimize content effortlessly with Optimole's intuitive integration and Cloud Library.
              </p>
              <div className="flex items-center text-indigo-600">
                <Zap size={20} className="mr-2" />
                <span className="font-medium">One-click WordPress integration</span>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Simplify, Organize, Accelerate with Optimole DAM
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Your digital transformation is just a click away. Let Optimole lift the weight of web chaos, leaving you with streamlined simplicity and a clear path forward.
            </p>
            <a 
              href="https://dashboard.optimole.com/register/" 
              className="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Start for free
            </a>
          </div>
        </div>
      </div>

      {/* Trusted Customers Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 uppercase text-sm font-medium tracking-wider mb-8">Trusted by 200,000+ websites and growing businesses</p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/bluehost-1.png" alt="Bluehost" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2020/07/themeisle.png" alt="ThemeIsle" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/ninja-one.png" alt="NinjaOne" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/WID.png" alt="WID" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:auto/h:auto/q:mauto/https://optimole.com/uploads/2024/01/Thrive_themes_.png" alt="Thrive Themes" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAMPage; 