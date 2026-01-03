import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Undertaking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-96 bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] flex items-center justify-center overflow-hidden mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Undertaking
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Important Documents and Declarations
          </motion.p>
        </div>
      </motion.section>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[#1a2e5a] hover:text-[#c5a059] transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Required Undertakings</h2>
          <div className="space-y-6">
            {[
              'Student Conduct Undertaking',
              'Parent Declaration Form',
              'Medical Fitness Certificate',
              'Transport Undertaking',
              'Fee Payment Undertaking',
              'Library Rules Undertaking'
            ].map((document, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-[#c5a059]/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <FileText className="text-[#1a2e5a]" size={24} />
                  <span className="text-lg font-medium text-[#1a2e5a]">{document}</span>
                </div>
                <motion.button 
                  className="flex items-center gap-2 bg-[#c5a059] text-white px-4 py-2 rounded-lg hover:bg-[#b08d4a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Undertaking;
