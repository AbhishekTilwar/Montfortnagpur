import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AssessmentEvaluation = () => {
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
            Assessment & Evaluation
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Comprehensive Evaluation System for Student Development
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Evaluation System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Formative Assessment', desc: 'Continuous evaluation through class participation, assignments, and quizzes.' },
              { title: 'Summative Assessment', desc: 'Periodic examinations to evaluate comprehensive understanding.' },
              { title: 'Practical Evaluation', desc: 'Hands-on assessment for science, computer, and vocational subjects.' },
              { title: 'Project Assessment', desc: 'Evaluation of project work, presentations, and research assignments.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-[#c5a059]" size={24} />
                  <h3 className="text-xl font-bold text-[#1a2e5a]">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
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
          <h2 className="text-3xl font-bold text-center mb-8">Grading System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { grade: 'A+', range: '90-100%', description: 'Outstanding Performance' },
              { grade: 'A', range: '80-89%', description: 'Excellent Performance' },
              { grade: 'B+', range: '70-79%', description: 'Very Good Performance' },
              { grade: 'B', range: '60-69%', description: 'Good Performance' },
              { grade: 'C', range: '50-59%', description: 'Average Performance' },
              { grade: 'D', range: '40-49%', description: 'Below Average' }
            ].map((grade, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center font-bold">
                  {grade.grade}
                </div>
                <div>
                  <div className="font-semibold">{grade.range}</div>
                  <div className="text-sm text-gray-300">{grade.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssessmentEvaluation;
