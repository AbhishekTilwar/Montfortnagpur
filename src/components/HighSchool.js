import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HighSchool = () => {
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
            High School
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Excellence in Secondary Education
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">High School Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Rajesh Kumar', qualification: 'Ph.D., M.Sc., B.Ed.', experience: '18 years', subject: 'Physics' },
              { name: 'Ms. Anita Sharma', qualification: 'M.Sc., B.Ed.', experience: '15 years', subject: 'Chemistry' },
              { name: 'Mr. Vijay Singh', qualification: 'M.Sc., B.Ed.', experience: '20 years', subject: 'Mathematics' },
              { name: 'Ms. Priya Patel', qualification: 'M.A., B.Ed.', experience: '16 years', subject: 'English' },
              { name: 'Dr. Suresh Reddy', qualification: 'Ph.D., M.Sc.', experience: '22 years', subject: 'Biology' },
              { name: 'Mr. Amit Kumar', qualification: 'M.Sc., B.Ed.', experience: '14 years', subject: 'Computer Science' }
            ].map((teacher, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-purple-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{teacher.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Qualification:</span>
                    <span className="font-medium">{teacher.qualification}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{teacher.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subject:</span>
                    <span className="font-medium">{teacher.subject}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HighSchool;
