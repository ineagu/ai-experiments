import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        website: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <span className="ml-2 text-xl font-bold text-indigo-900">Optimole</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center py-12 px-4 bg-indigo-50">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We're here to answer your questions and help you get the most out of our services.
        </p>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Contact Info */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">We Welcome Your Feedback!</h2>
              
              <p className="text-gray-600 mb-8">
                We are here to answer any questions you may have. Our team will happily provide you with additional information about our services and features.
              </p>
              
              <p className="text-gray-600 mb-8">
                We are always looking to improve our content so we see your questions, suggestions, and feedback as an opportunity to do just that. Feel free to share your thoughts with us!
              </p>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:support@optimole.com" className="text-indigo-600 hover:underline">support@optimole.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <a href="tel:+40721234567" className="text-indigo-600 hover:underline">+40 721 234 567</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <address className="not-italic text-gray-600">
                      Vertigo Studio SA<br />
                      20 Povernei Street<br />
                      010641 Bucharest<br />
                      Romania, European Union
                    </address>
                  </div>
                </div>
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
                
                {submitted ? (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-4">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Full description of the issue/question <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        className="bg-indigo-600 text-white py-3 px-6 rounded font-medium hover:bg-indigo-700 transition-colors flex items-center"
                      >
                        <Send size={18} className="mr-2" />
                        Submit
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Map Section - Optional */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              {/* Replace this with an actual Google Maps embed */}
              <div className="text-center p-4">
                <p className="text-gray-500">Google Map would be embedded here</p>
                <p className="text-sm text-gray-400">Showing Vertigo Studio SA location in Bucharest, Romania</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center flex-wrap gap-8 mb-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Support</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Terms</a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} | All rights reserved | Vertigo Studio SA
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage; 