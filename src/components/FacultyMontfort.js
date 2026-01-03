import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const FacultyMontfort = () => {
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
            Faculty @ Montfort
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Dedicated Educators Shaping Future Leaders
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
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Pre Primary', count: '12', description: 'Dedicated early childhood educators' },
              { name: 'Primary', count: '24', description: 'Experienced primary school teachers' },
              { name: 'High School', count: '36', description: 'Subject specialists and experts' },
              { name: 'Non Teaching Staff', count: '28', description: 'Support and administrative staff' },
              { name: 'Admin Staff', count: '8', description: 'Management and administration' },
              { name: 'Total Faculty', count: '108', description: 'Complete teaching staff' }
            ].map((faculty, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#1a2e5a]/5 to-[#c5a059]/5 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-[#1a2e5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#c5a059]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-2">{faculty.name}</h3>
                <div className="text-3xl font-bold text-[#c5a059] mb-2">{faculty.count}</div>
                <p className="text-gray-600 text-sm">{faculty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Faculty Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#c5a059] mb-2">85%</div>
              <div className="text-lg">Post Graduate Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c5a059] mb-2">15+</div>
              <div className="text-lg">Average Experience (Years)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c5a059] mb-2">25+</div>
              <div className="text-lg">Faculty Development Programs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FacultyMontfort;
