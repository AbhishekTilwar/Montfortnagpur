import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Download, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AcademicCalendar = () => {
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
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(197, 160, 89, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Academic Calendar
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Important Dates and Events for the Academic Year
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
        {/* Calendar Overview */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.div 
              className="w-20 h-20 bg-[#1a2e5a] rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">Academic Year 2023-24</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-[#1a2e5a]/5 rounded-xl">
              <h3 className="font-bold text-[#1a2e5a] mb-2">Start Date</h3>
              <p className="text-2xl font-bold text-[#c5a059">June 1, 2023</p>
            </div>
            <div className="text-center p-6 bg-[#1a2e5a]/5 rounded-xl">
              <h3 className="font-bold text-[#1a2e5a] mb-2">End Date</h3>
              <p className="text-2xl font-bold text-[#c5a059">April 30, 2024</p>
            </div>
            <div className="text-center p-6 bg-[#1a2e5a]/5 rounded-xl">
              <h3 className="font-bold text-[#1a2e5a] mb-2">Total Days</h3>
              <p className="text-2xl font-bold text-[#c5a059">220</p>
            </div>
          </div>

          <div className="text-center">
            <motion.button 
              className="inline-flex items-center gap-2 bg-[#c5a059] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b08d4a] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Full Calendar
            </motion.button>
          </div>
        </motion.div>

        {/* Monthly Breakdown */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Monthly Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { month: 'June 2023', events: 'School Reopens, Orientation', status: 'completed' },
              { month: 'July 2023', events: 'Unit Test 1, Club Activities', status: 'completed' },
              { month: 'August 2023', events: 'Independence Day, Mid-Term Exam', status: 'completed' },
              { month: 'September 2023', events: 'First Term Results, PTM', status: 'completed' },
              { month: 'October 2023', events: 'Diwali Break, Project Work', status: 'completed' },
              { month: 'November 2023', events: 'Unit Test 2, Sports Day', status: 'completed' },
              { month: 'December 2023', events: 'Annual Day, Winter Break', status: 'completed' },
              { month: 'January 2024', events: 'Board Exam Prep, Mock Tests', status: 'current' },
              { month: 'February 2024', events: 'Board Exams, Practical Exams', status: 'upcoming' },
              { month: 'March 2024', events: 'Final Exams, Results', status: 'upcoming' },
              { month: 'April 2024', events: 'New Session Planning', status: 'upcoming' }
            ].map((month, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  month.status === 'completed' ? 'bg-gray-50 border-gray-200' :
                  month.status === 'current' ? 'bg-[#c5a059]/10 border-[#c5a059]' :
                  'bg-white border-gray-100'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#1a2e5a]">{month.month}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    month.status === 'completed' ? 'bg-gray-200 text-gray-600' :
                    month.status === 'current' ? 'bg-[#c5a059] text-white' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {month.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{month.events}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Examinations</h3>
              <div className="space-y-3">
                {[
                  { date: 'July 15-20, 2023', event: 'Unit Test 1' },
                  { date: 'August 10-20, 2023', event: 'Mid-Term Examination' },
                  { date: 'November 10-15, 2023', event: 'Unit Test 2' },
                  { date: 'February 15 - March 15, 2024', event: 'Board Examinations' }
                ].map((exam, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Clock className="text-[#c5a059]" size={16} />
                    <span className="text-sm">{exam.date} - {exam.event}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Holidays</h3>
              <div className="space-y-3">
                {[
                  { date: 'August 15, 2023', event: 'Independence Day' },
                  { date: 'October 19-23, 2023', event: 'Diwali Break' },
                  { date: 'December 25, 2023', event: 'Christmas' },
                  { date: 'January 26, 2024', event: 'Republic Day' }
                ].map((holiday, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Calendar className="text-[#c5a059]" size={16} />
                    <span className="text-sm">{holiday.date} - {holiday.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Download Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Academic Calendar 2023-24',
              'Examination Schedule',
              'Holiday List',
              'Activity Calendar'
            ].map((resource, index) => (
              <motion.button 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#c5a059]/10 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="text-[#1a2e5a] group-hover:text-[#c5a059]" size={20} />
                  <span className="text-[#1a2e5a] font-medium">{resource}</span>
                </div>
                <Download className="text-[#c5a059]" size={20} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
