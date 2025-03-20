import React from 'react';
import { Mail, MapPin, Building } from 'lucide-react';

const ContactPage = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're here to answer your questions and help you get the most out of our services.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Contact Info */}
            <div className="md:w-1/3">
              <p className="text-gray-600 mb-8">
                We are here to answer any questions you may have. Our team will happily provide you with additional information about our services and features.
              </p>
              
              <p className="text-gray-600 mb-8">
                We are always looking to improve our content so we see your questions, suggestions, and feedback as an opportunity to do just that. Feel free to share your thoughts with us!
              </p>
              
              {/* Company Address */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="font-semibold text-gray-800 text-lg mb-3">Company Details</h3>
                <div className="flex items-start mb-3">
                  <Building className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="text-gray-700 font-medium">Vertigo Studio SA</p>
                  </div>
                </div>
                <div className="flex items-start mb-3">
                  <MapPin className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="text-gray-700">20 Povernei Street,</p>
                    <p className="text-gray-700">010641 Bucharest,</p>
                    <p className="text-gray-700">Romania</p>
                  </div>
                </div>
              </div>
              
              {/* Support Information */}
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-8">
                <h3 className="font-semibold text-indigo-800 text-lg mb-3">Getting Support</h3>
                <p className="text-gray-700 mb-4">
                  Existing customers can access our support directly from their dashboard for the fastest response. We prioritize technical issues and aim to respond within 24 hours.
                </p>
                <div className="flex items-start mb-4">
                  <Mail className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="text-gray-700">For general inquiries, use the contact form on this page.</p>
                  </div>
                </div>
                <a href="https://optimole.com/docs/" className="text-indigo-600 hover:text-indigo-800 font-medium">Browse our documentation →</a>
              </div>
              
              {/* Disclaimer Box */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Please note that we do not accept</span> guest posts, paid advertising, sponsored content requests (paid listings, links, reviews, or other kinds of direct sponsorships). If you send us inquiries about these, we will not reply to your message.
                </p>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">Contact Form</h2>
                
                {/* Special marker for WordPress to replace */}
                <div id="optimole-gravity-form-marker">
                  {/* WordPress will render the form here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 