import React from 'react';
import Navbar from './Navbar';
import SocialMediaWidget from './SocialMediaWidget';

const PageTemplate = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#1a2e5a] to-[#c5a059] text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg opacity-90">Montfort School Nagpur - Excellence in Education</p>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
      
      {/* Social Media Widget */}
      <SocialMediaWidget position="right" vertical={true} />
    </div>
  );
};

export default PageTemplate;
