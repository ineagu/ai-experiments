import React, { useState, useEffect } from 'react';
import { ChevronLeft, HelpCircle, AlertCircle, X, Check, CreditCard, ArrowRight } from 'lucide-react';

const WPFullPaySettings = () => {
  const [activeSetting, setActiveSetting] = useState('stripe');
  const [activeTab, setActiveTab] = useState('connection');
  const [helpOpen, setHelpOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [quickSetupOpen, setQuickSetupOpen] = useState(false);
  const [selectedEmailTemplate, setSelectedEmailTemplate] = useState('payment');

  // Group settings by category for better organization
  const settingGroups = [
    {
      title: "Payment Setup",
      settings: [
        {
          id: 'stripe',
          title: 'Stripe account',
          description: 'Configure your Stripe API keys, and set up webhooks',
          icon: 'stripe',
          tabs: ['connection'],
          priority: 1
        },
        {
          id: 'forms',
          title: 'Forms',
          description: 'Set global settings & styles for your payment forms',
          icon: 'form',
          tabs: ['options', 'appearance'],
          priority: 2
        }
      ]
    },
    {
      title: "Customer Experience",
      settings: [
        {
          id: 'email',
          title: 'Email notifications',
          description: 'Customize and align your e-mails to your brand',
          icon: 'email',
          tabs: ['options', 'templates'],
          priority: 3
        },
        {
          id: 'customer',
          title: 'Customer portal',
          description: 'Configure how your customers can manage their cards, subscriptions, and invoices',
          icon: 'customer',
          priority: 4
        }
      ]
    },
    {
      title: "Configuration",
      settings: [
        {
          id: 'security',
          title: 'Security',
          description: 'Keep your payment forms secure',
          icon: 'security',
          priority: 5
        },
        {
          id: 'currency',
          title: 'Currency format',
          description: 'Set your currency format preferences',
          icon: 'currency',
          priority: 6
        },
        {
          id: 'logs',
          title: 'Error logging',
          description: 'Help the developers debug plugin issues',
          icon: 'logs',
          priority: 7
        },
        {
          id: 'license',
          title: 'License',
          description: 'Enter or manage your license key to enable unlimited transactions without fees',
          icon: 'license',
          priority: 8
        }
      ]
    }
  ];

  // Flatten settings for easier lookup
  const allSettings = settingGroups.flatMap(group => group.settings);
  
  // Email templates data
  const emailTemplates = [
    { id: 'payment', name: 'Payment receipt' },
    { id: 'subscription', name: 'Subscription receipt' },
    { id: 'subscription-ended', name: 'Subscription ended' },
    { id: 'donation', name: 'Donation receipt' },
    { id: 'card-saved', name: 'Card saved' },
    { id: 'portal-login', name: 'Customer portal login code' }
  ];

  const saveSettings = () => {
    setNotification({
      type: 'success',
      message: 'Settings saved successfully!'
    });
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'stripe':
        return <div className="w-8 h-8 flex items-center justify-center text-indigo-600 font-bold">S</div>;
      case 'form':
        return <div className="w-8 h-8 flex items-center justify-center text-blue-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="15" y1="3" x2="15" y2="21"></line>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="3" y1="15" x2="21" y2="15"></line>
          </svg>
        </div>;
      case 'email':
        return <div className="w-8 h-8 flex items-center justify-center text-green-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>;
      case 'security':
        return <div className="w-8 h-8 flex items-center justify-center text-yellow-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>;
      case 'customer':
        return <div className="w-8 h-8 flex items-center justify-center text-purple-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>;
      case 'currency':
        return <div className="w-8 h-8 flex items-center justify-center text-green-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>;
      case 'logs':
        return <div className="w-8 h-8 flex items-center justify-center text-red-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="17" y1="7" x2="7" y2="17"></line>
            <polyline points="17 17 7 17 7 7"></polyline>
          </svg>
        </div>;
      case 'license':
        return <div className="w-8 h-8 flex items-center justify-center text-gray-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>;
      default:
        return <div className="w-8 h-8"></div>;
    }
  };

  const QuickSetupPanel = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Quick Setup Guide</h2>
          <button onClick={() => setQuickSetupOpen(false)} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</div>
              <h3 className="font-medium">Connect your Stripe account</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Connect WP Full Pay to your Stripe account to start accepting payments.</p>
            <button 
              onClick={() => {
                setQuickSetupOpen(false);
                setActiveSetting('stripe');
                setActiveTab('connection');
              }}
              className="text-blue-600 text-sm flex items-center mt-2"
            >
              Configure now <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</div>
              <h3 className="font-medium">Set up your payment forms</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Configure how your payment forms will look and behave.</p>
            <button 
              onClick={() => {
                setQuickSetupOpen(false);
                setActiveSetting('forms');
                setActiveTab('options');
              }}
              className="text-blue-600 text-sm flex items-center mt-2"
            >
              Configure now <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <div className="flex items-center">
              <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</div>
              <h3 className="font-medium">Customize email notifications</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Personalize the emails that customers receive after making payments.</p>
            <button 
              onClick={() => {
                setQuickSetupOpen(false);
                setActiveSetting('email');
                setActiveTab('templates');
              }}
              className="text-blue-600 text-sm flex items-center mt-2"
            >
              Configure now <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <div className="flex items-center">
              <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</div>
              <h3 className="font-medium">Activate your license</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Enter your license key to unlock all features and remove transaction fees.</p>
            <button 
              onClick={() => {
                setQuickSetupOpen(false);
                setActiveSetting('license');
              }}
              className="text-blue-600 text-sm flex items-center mt-2"
            >
              Configure now <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t flex justify-end">
          <button 
            onClick={() => setQuickSetupOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Close guide
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettingContent = () => {
    if (activeSetting === 'main') {
      return (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">WP Full Pay Settings</h1>
            <button 
              onClick={() => setQuickSetupOpen(true)} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
            >
              <CreditCard size={16} className="mr-2" />
              Quick Setup Guide
            </button>
          </div>
          
          <div className="grid gap-8">
            {settingGroups.map((group, index) => (
              <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
                <h2 className="text-lg font-medium mb-4">{group.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.settings.map(setting => (
                    <a 
                      key={setting.id} 
                      className="border rounded-lg p-4 flex items-start cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSetting(setting.id);
                        if (setting.tabs) {
                          setActiveTab(setting.tabs[0]);
                        }
                      }}
                      href="#"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                        {renderIcon(setting.icon)}
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium text-lg">{setting.title}</h3>
                        <p className="text-gray-600 text-sm">{setting.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const setting = allSettings.find(s => s.id === activeSetting);

    if (setting.id === 'license') {
      return (
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">WP Full Pay License</h2>
            <div className="mb-4">
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Enter your license key"
              />
            </div>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
              onClick={saveSettings}
            >
              Activate
            </button>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <h3 className="font-medium mb-2">Where to get my license key?</h3>
            <p className="mb-2">
              Enter your license from <a href="#" className="text-blue-600">Themeisle purchase history</a> in order to get plugin updates.
            </p>
            <p>
              <a href="#" className="text-blue-600">Upgrade to Pro</a> for no added fee and priority support.
            </p>
          </div>
        </div>
      );
    }
    
    if (setting.id === 'logs') {
      return (
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Log entries</h2>
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium">
                Download log
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded border hover:bg-gray-50 uppercase text-sm font-medium">
                Empty log
              </button>
            </div>
            
            <h2 className="text-lg font-medium mb-4">Log settings</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Logging level</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="log-level" checked />
                  <span>Error</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="log-level" />
                  <span>Warning</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="log-level" />
                  <span>Info</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="log-level" />
                  <span>Debug</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Logging channels</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" checked />
                  <span>WordPress database</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Webserver error log</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Behavior</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Catch all errors not caught by plugins</span>
                </label>
              </div>
            </div>
            
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
              onClick={saveSettings}
            >
              Save settings
            </button>
          </div>
        </div>
      );
    }
    
    if (setting.id === 'currency') {
      return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Format decimals with</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="decimal-format" checked />
                  <span>$10.99 (dot)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="decimal-format" />
                  <span>$10,99 (comma)</span>
                </label>
              </div>
              
              <h2 className="text-lg font-medium mb-4">Use currency symbol or code?</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="currency-display" checked />
                  <span>$10.99 (symbol)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="currency-display" />
                  <span>USD 10.99 (code)</span>
                </label>
              </div>
              
              <h2 className="text-lg font-medium mb-4">Put currency identifier on</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="currency-position" checked />
                  <span>€10.99 (left)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="currency-position" />
                  <span>10.99€ (right)</span>
                </label>
              </div>
              
              <h2 className="text-lg font-medium mb-4">Insert space between amount and currency?</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="currency-space" checked />
                  <span>10.99EUR (no)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="currency-space" />
                  <span>10.99 EUR (yes)</span>
                </label>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                  onClick={saveSettings}
                >
                  Save settings
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded border hover:bg-gray-50 uppercase text-sm font-medium">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">What are these settings for?</h3>
              <p>
                Options on this page control how payment amounts, dates, etc. are localized on the WordPress dashboard pages of WP Full Pay.
              </p>
            </div>
          </div>
        </div>
      );
    }
    
    if (setting.id === 'security') {
      return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Google reCAPTCHA</h2>
              <div className="mb-6">
                <h3 className="font-medium mb-2">Secure with reCAPTCHA</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Inline forms</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Checkout forms</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Customer portal</span>
                  </label>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                  onClick={saveSettings}
                >
                  Save settings
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded border hover:bg-gray-50 uppercase text-sm font-medium">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">How to protect forms with Google reCaptcha?</h3>
              <p className="mb-4">
                You can find more info about which version you should choose and how to obtain the API keys in our Knowledge base.
              </p>
              <a href="#" className="text-blue-600">Learn more about Google reCAPTCHA</a>
            </div>
          </div>
        </div>
      );
    }
    
    if (setting.id === 'customer') {
      return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Use Stripe Customer Portal</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Use Stripe Customer Portal</span>
                </label>
              </div>
              
              <h2 className="text-lg font-medium mb-4">Customers can manage</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" checked />
                  <span>Subscriptions</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" checked />
                  <span>Invoices</span>
                </label>
              </div>
              
              <h2 className="text-lg font-medium mb-4">Subscription settings</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Customers can upgrade/downgrade subscriptions</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" checked />
                  <span>Customers can cancel subscriptions</span>
                </label>
              </div>
              
              <h3 className="font-medium mb-2">When to cancel subscriptions</h3>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="cancel-timing" checked />
                  <span>Immediately</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4" name="cancel-timing" />
                  <span>At period end</span>
                </label>
              </div>
              
              <h2 className="text-lg font-medium mb-4">Display settings</h2>
              <div className="space-y-2 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" checked />
                  <span>Scroll pane into view</span>
                </label>
              </div>
              
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                onClick={saveSettings}
              >
                Save settings
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">What is the Customer portal?</h3>
              <p className="mb-4">
                Customer portal is a page on your website where customers can update their card, upgrade/downgrade subscriptions, cancel subscriptions, and download invoices.
              </p>
              <a href="#" className="text-blue-600">Learn more about Customer portal</a>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">Stripe Customer Portal</h3>
              <p className="mb-4">
                If you are using Stripe Customer Portal, make sure to configure it from your Stripe account.
              </p>
              <a href="#" className="text-blue-600">Configure Customer portal</a>
            </div>
          </div>
        </div>
      );
    }
    
    if (setting.id === 'forms') {
      return (
        <div className="p-6">
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              {setting.tabs.map(tab => (
                <button
                  key={tab}
                  className={`pb-2 px-1 font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'options' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-4">Prefill form fields</h2>
                  <div className="space-y-2 mb-6">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4" checked />
                      <span>Fill in email field for logged in users</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Allow setting form fields via URL parameters</span>
                    </label>
                  </div>
                  
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                    onClick={saveSettings}
                  >
                    Save settings
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p>
                    For prefilling form fields in a more granular manner, please <a href="#" className="text-blue-600">refer to our knowledge base article</a>.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-lg font-medium mb-4">Custom CSS styles</h2>
                <div className="mb-6">
                  <div className="bg-gray-900 text-gray-100 p-2 rounded-t-md flex items-center">
                    <span className="text-xs">CSS Editor</span>
                  </div>
                  <div className="border-l border-r border-b rounded-b-md">
                    <textarea 
                      className="font-mono text-sm w-full h-64 p-3 outline-none resize-none"
                      style={{ backgroundColor: '#0C2231', color: '#CBD5E0' }}
                      defaultValue=""
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                  onClick={saveSettings}
                >
                  Save settings
                </button>
              </div>
              
              <div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium mb-2">About custom CSS styles</h3>
                  <p className="mb-4">
                    Add styling to your forms. Proceed only if you know what you're doing!
                  </p>
                  <a href="#" className="text-blue-600">Learn more about custom CSS styles</a>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    if (setting.id === 'email') {
      return (
        <div className="p-6">
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              {setting.tabs.map(tab => (
                <button
                  key={tab}
                  className={`pb-2 px-1 font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'options' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-4">Email 'From' address</h2>
                  <div className="space-y-2 mb-6">
                    <label className="flex items-center space-x-2">
                      <input type="radio" className="w-4 h-4" name="from-address" checked />
                      <span className="text-sm">Website Admin: example@domain.com</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" className="w-4 h-4" name="from-address" />
                      <span className="text-sm">Custom email address</span>
                    </label>
                  </div>
                  
                  <h2 className="text-lg font-medium mb-4">Send copy of email notifications to</h2>
                  <div className="space-y-2 mb-6">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Website Admin: example@domain.com</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded mt-2" 
                      placeholder="Add more email addresses here"
                    />
                  </div>
                  
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                    onClick={saveSettings}
                  >
                    Save settings
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium mb-2">Configure plugin email notifications</h3>
                  <p className="mb-4">
                    These settings apply to plugin email notifications only.
                  </p>
                  <a href="#" className="text-blue-600">Learn more about Email notifications</a>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'templates' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 border-r pr-4">
                <h3 className="font-medium mb-4">Available templates:</h3>
                <div className="space-y-2">
                  {emailTemplates.map(template => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedEmailTemplate(template.id)}
                      className={`flex items-center justify-between w-full p-3 border rounded text-left ${selectedEmailTemplate === template.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
                    >
                      <span>{template.name}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="col-span-2">
                <h2 className="text-xl font-medium mb-4">Payment receipt</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      className="flex-1 p-2 border rounded" 
                      defaultValue="Payment Receipt"
                    />
                    <button className="ml-2 bg-white border border-blue-500 text-blue-500 px-3 py-2 rounded text-xs uppercase">
                      Insert token
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Body</label>
                  <div className="flex items-center mb-2 space-x-2">
                    <button className="bg-white border border-blue-500 text-blue-500 px-3 py-1 rounded text-xs uppercase">
                      Send a test
                    </button>
                    <button className="bg-white border border-blue-500 text-blue-500 px-3 py-1 rounded text-xs uppercase">
                      Reset template
                    </button>
                    <button className="bg-white border border-blue-500 text-blue-500 px-3 py-1 rounded text-xs uppercase">
                      Insert token
                    </button>
                  </div>
                  <textarea 
                    className="w-full p-2 border rounded h-64 font-mono text-sm"
                    defaultValue={`<html><body><p>Hi,</p><p>Here's your receipt for your payment of %AMOUNT%</p><p>Thanks</p><br/>%NAME%</body></html>`}
                  ></textarea>
                </div>
                
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                  onClick={saveSettings}
                >
                  Save template
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    if (setting.id === 'stripe') {
      return (
        <div className="p-6">
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              {setting.tabs.map(tab => (
                <button
                  key={tab}
                  className={`pb-2 px-1 font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'connection' ? 'Connection' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'connection' && (
            <div>
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Connection Status</h2>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 flex items-center">
                  Connect with 
                  <span className="ml-1 font-bold">stripe</span>
                </button>
                <p className="mt-2 text-sm">
                  For more information, see our <a href="#" className="text-blue-600">Stripe Connect Setup Guide</a>.
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Secret key</h2>
                <input 
                  type="text" 
                  className="w-full md:w-1/2 p-2 border rounded" 
                  value="YOUR_TEST_SECRET_KEY"
                />
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Publishable key</h2>
                <input 
                  type="text" 
                  className="w-full md:w-1/2 p-2 border rounded" 
                  value="YOUR_TEST_PUBLISHABLE_KEY"
                />
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Account Mode</h2>
                <div className="space-y-2 mb-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" className="w-4 h-4" name="account-mode" checked />
                    <span>Test</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" className="w-4 h-4" name="account-mode" />
                    <span>Live</span>
                  </label>
                </div>
                <p className="text-sm text-gray-700">
                  While in Test Mode, real payments will not be processed.<br/>
                  Before adding the form(s) to your website, switch to Live Mode and create duplicate forms with Live products and pricing.
                </p>
              </div>
              
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 uppercase text-sm font-medium"
                onClick={saveSettings}
              >
                Save settings
              </button>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Quick Setup Modal */}
      {quickSetupOpen && <QuickSetupPanel />}
      
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {notification.type === 'success' ? (
            <Check className="w-5 h-5 mr-2" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2" />
          )}
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="ml-4">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                className={`text-blue-600 font-medium flex items-center mr-4 ${activeSetting === 'main' ? 'invisible' : ''}`}
                onClick={() => setActiveSetting('main')}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Settings
              </button>
              
              <h1 className="text-2xl font-bold">
                {activeSetting === 'main' ? 'Settings' : allSettings.find(s => s.id === activeSetting)?.title}
              </h1>
            </div>
            
            <div className="flex md:hidden">
              <button 
                onClick={() => setHelpOpen(!helpOpen)}
                className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
              >
                <HelpCircle size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              <span>Test Mode</span>
            </div>
            <div className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              <span>License Inactive</span>
            </div>
            <div className="relative hidden md:block">
              <button 
                className="p-2 text-gray-500 rounded-full hover:bg-gray-100" 
                onClick={() => setHelpOpen(!helpOpen)}
              >
                <HelpCircle size={20} />
              </button>
              
              {helpOpen && (
                <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg border p-2 w-64 z-10">
                  <ul className="divide-y">
                    <li className="py-2">
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span>Getting started guide</span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        <span>Search the documentation</span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                        <span>Leave feedback</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-screen-xl mx-auto flex bg-white shadow-sm my-4 rounded-lg">
        {activeSetting !== 'main' && (
          <div className="w-64 border-r">
            <nav className="pt-4 pb-10 h-full">
              {settingGroups.map((group, index) => (
                <div key={index} className="mb-4">
                  <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">{group.title}</h3>
                  <ul>
                    {group.settings.map(setting => (
                      <li key={setting.id}>
                        <a
                          href="#"
                          className={`flex items-center py-2 px-4 ${activeSetting === setting.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' : 'text-gray-700 hover:bg-gray-50'}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSetting(setting.id);
                            if (setting.tabs) {
                              setActiveTab(setting.tabs[0]);
                            }
                          }}
                        >
                          <div className="w-6 h-6 flex items-center justify-center mr-2">
                            {renderIcon(setting.icon)}
                          </div>
                          <span className="text-sm">{setting.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        )}
        
        <div className={`${activeSetting !== 'main' ? 'flex-1' : 'w-full'}`}>
          {renderSettingContent()}
        </div>
      </div>
    </div>
  );
};

export default WPFullPaySettings;