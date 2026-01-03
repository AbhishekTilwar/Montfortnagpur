import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Achievers = () => {
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
            Achievers
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Celebrating Excellence and Success Stories
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Our Achievers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', achievement: 'State Topper - Class 10', percentage: '98.5%', year: '2023' },
              { name: 'Priya Patel', achievement: 'National Science Olympiad Gold', percentage: 'Rank 5', year: '2023' },
              { name: 'Amit Kumar', achievement: 'Sports Championship', percentage: 'Gold Medal', year: '2023' },
              { name: 'Sneha Reddy', achievement: 'Debate Competition', percentage: 'Best Speaker', year: '2023' },
              { name: 'Vikram Singh', achievement: 'Mathematics Olympiad', percentage: 'State Rank 2', year: '2023' },
              { name: 'Anjali Gupta', achievement: 'Cultural Festival', percentage: 'Best Performer', year: '2023' }
            ].map((achiever, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-[#c5a059]/10 to-[#1a2e5a]/10 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-[#1a2e5a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-[#c5a059]" size={40} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-2">{achiever.name}</h3>
                <p className="text-gray-600 mb-2">{achiever.achievement}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="text-[#c5a059]" size={16} />
                  <span className="font-bold text-[#c5a059]">{achiever.percentage}</span>
                </div>
                <span className="text-sm text-gray-500">{achiever.year}</span>
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
          <h2 className="text-3xl font-bold text-center mb-8">School Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Academic Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Award className="text-[#c5a059]" size={20} />
                  <span>100% Board Results - 10th Grade</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="text-[#c5a059]" size={20} />
                  <span>State Rank 3 in Science Olympiad</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="text-[#c5a059]" size={20} />
                  <span>Best School Award in District</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Sports & Cultural</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Trophy className="text-[#c5a059]" size={20} />
                  <span>Regional Sports Championship</span>
                </li>
                <li className="flex items-center gap-3">
                  <Trophy className="text-[#c5a059]" size={20} />
                  <span>Cultural Festival Winners</span>
                </li>
                <li className="flex items-center gap-3">
                  <Trophy className="text-[#c5a059]" size={20} />
                  <span>National Level Participation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievers;
