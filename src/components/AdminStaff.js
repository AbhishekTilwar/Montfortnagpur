import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AdminStaff = () => {
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
            Admin Staff
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Leadership and Management Team
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Administrative Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Fr. John Mathew', role: 'Principal', qualification: 'M.A., M.Ed., Ph.D.' },
              { name: 'Fr. Thomas Paul', role: 'Manager', qualification: 'M.A., B.Ed.' },
              { name: 'Fr. Michael Raj', role: 'Vice Principal', qualification: 'M.Sc., M.Ed.' },
              { name: 'Ms. Mary Thomas', role: 'Administrator', qualification: 'M.Com., MBA' }
            ].map((admin, index) => (
              <motion.div 
                key={index}
                className="p-8 bg-gradient-to-br from-[#1a2e5a]/10 to-[#c5a059]/10 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-[#1a2e5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-[#c5a059]" size={40} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-2">{admin.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="text-[#c5a059]" size={16} />
                    <span className="font-semibold text-[#c5a059]">{admin.role}</span>
                  </div>
                  <div className="text-gray-600">{admin.qualification}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminStaff;
