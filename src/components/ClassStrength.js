import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ClassStrength = () => {
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
            Class Wise Students Strength 2023
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Student Enrollment Statistics by Grade
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Student Strength 2023</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { grade: 'Nursery', sections: 'A', students: 45 },
              { grade: 'KG', sections: 'A, B', students: 92 },
              { grade: 'Class 1', sections: 'A, B', students: 88 },
              { grade: 'Class 2', sections: 'A, B', students: 85 },
              { grade: 'Class 3', sections: 'A, B', students: 90 },
              { grade: 'Class 4', sections: 'A, B', students: 87 },
              { grade: 'Class 5', sections: 'A, B', students: 92 },
              { grade: 'Class 6', sections: 'A, B, C', students: 135 },
              { grade: 'Class 7', sections: 'A, B, C', students: 128 },
              { grade: 'Class 8', sections: 'A, B, C', students: 142 },
              { grade: 'Class 9', sections: 'A, B', students: 95 },
              { grade: 'Class 10', sections: 'A, B', students: 88 }
            ].map((classInfo, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-gradient-to-br from-[#1a2e5a]/5 to-[#c5a059]/5 rounded-xl border border-[#1a2e5a]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users className="text-[#1a2e5a]" size={24} />
                  <h3 className="text-xl font-bold text-[#1a2e5a]">{classInfo.grade}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sections:</span>
                    <span className="font-medium">{classInfo.sections}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-bold text-[#c5a059]">{classInfo.students}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-[#1a2e5a]/10 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-[#1a2e5a]" size={24} />
                <span className="text-lg font-bold text-[#1a2e5a]">Total Students</span>
              </div>
              <span className="text-3xl font-bold text-[#c5a059]">1,167</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClassStrength;
