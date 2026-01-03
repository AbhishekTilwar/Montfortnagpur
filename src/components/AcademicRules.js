import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AcademicRules = () => {
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
            Academic Rules & Regulations
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Guidelines for Academic Excellence and Discipline
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Academic Guidelines</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Attendance Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Minimum 75% attendance required for appearing in examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Leave applications must be submitted in writing to the class teacher</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                  <span>Medical leave requires doctor's certificate</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Examination Rules</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Students must appear for all internal and external examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                  <span>Strict action against malpractice during examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Re-examination only for genuine medical reasons</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Code of Conduct</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Uniform must be worn neatly and cleanly at all times</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span>Respectful behavior towards teachers and fellow students</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                  <span>Mobile phones strictly prohibited during school hours</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicRules;
