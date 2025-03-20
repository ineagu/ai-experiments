import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import './App.css'
import ImageOptimizer from './components/common/ImageOptimizer';

// Lazy load all page components for code splitting
const OptimolePricingRedesign = lazy(() => import('./components/OptimolePricingRedesign'));
const HomePage = lazy(() => import('./components/HomePage'));
const OptimoleAboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const WordPressPluginPage = lazy(() => import('./components/WordPressPluginPage'));
const DAMPage = lazy(() => import('./components/DAMPage'));
const ComparisonPage = lazy(() => import('./components/ComparisonPage'));
const ImageKitComparisonPage = lazy(() => import('./components/ImageKitComparisonPage'));

// Create a type definition for Vite's import.meta
declare global {
  interface ImportMeta {
    env: {
      MODE: string;
      PROD: boolean;
      DEV: boolean;
    };
  }
}

// Loading component to show while chunks are loading
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

// Create a layout component to handle conditional header rendering
function AppLayout() {
  const location = useLocation();
  // If a route has a trailing slash, remove it
  const path = location.pathname.endsWith('/') && location.pathname !== '/' 
    ? location.pathname.slice(0, -1) 
    : location.pathname;

  // Get base path for GitHub Pages or development
  const getBasePath = () => {
    if (import.meta.env.MODE === 'production') {
      return '/ai-experiments';
    }
    return '';
  };

  const basePath = getBasePath();
  
  // Only show navigation if not on a specific page
  const hideNavigation = 
    path === `${basePath}/wordpress-plugin` || 
    path === `${basePath}/pricing-wp` || 
    path === `${basePath}/about-wp` || 
    path === `${basePath}/contact-wp` || 
    path === `${basePath}/home-wp` ||
    path === `${basePath}/dam-wp` ||
    path === `${basePath}/compare-wp` ||
    path === `${basePath}/imagekit-wp`;

  return (
    <div className="optimole-app min-h-screen bg-gray-50">
      {!hideNavigation && (
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <ImageOptimizer 
                  src="https://mlvoslivyghz.i.optimole.com/cb:a7JM~41a03/w:168/h:48/q:mauto/ig:avif/https://optimole.com/uploads/2024/06/logo_mole.svg" 
                  alt="Optimole" 
                  width={168}
                  height={48}
                  priority={true}
                  className="h-8"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
                Pricing
              </Link>
              <Link to="/wordpress" className="text-gray-700 hover:text-blue-600 font-medium">
                WordPress
              </Link>
              <Link to="/dam" className="text-gray-700 hover:text-blue-600 font-medium">
                Digital Asset Management
              </Link>
              <Link to="/compare" className="text-gray-700 hover:text-blue-600 font-medium">
                VS ShortPixel
              </Link>
              <Link to="/compare-imagekit" className="text-gray-700 hover:text-blue-600 font-medium">
                VS ImageKit
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                  Guides
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">How to Speed Up WordPress</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fastest WordPress Hosting</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fastest WordPress Themes</a>
                </div>
              </div>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium">
                Login
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
        </header>
      )}

      {/* Main Content */}
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<OptimoleAboutPage />} />
            <Route path="/pricing" element={<OptimolePricingRedesign />} />
            <Route path="/wordpress" element={<WordPressPluginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dam" element={<DAMPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/compare-imagekit" element={<ImageKitComparisonPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Optimole</h3>
              <p className="text-gray-400">
                The #1 image optimization service for websites. Automatically compress, resize, and deliver optimized images.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Get Started</a></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/wordpress" className="hover:text-white">WordPress Plugin</Link></li>
                <li><Link to="/dam" className="hover:text-white">Digital Asset Management</Link></li>
                <li><Link to="/compare" className="hover:text-white">VS ShortPixel</Link></li>
                <li><Link to="/compare-imagekit" className="hover:text-white">VS ImageKit</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Optimole. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  // Use basename in production but not in development
  const basename = import.meta.env.PROD ? '/ai-experiments' : '/';
  
  console.log('Environment:', import.meta.env.MODE);
  console.log('Using basename:', basename);
  
  return (
    <Router basename={basename}>
      <AppLayout />
    </Router>
  )
}

export default App 