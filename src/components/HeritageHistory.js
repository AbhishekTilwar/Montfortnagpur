import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Award, Clock, Building, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HeritageHistory = () => {
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
            Heritage & History
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            The Rich Legacy of Montfort School Nagpur
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
        {/* Introduction */}
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
              <Clock className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">A Journey of Excellence</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 text-center">
            <p className="text-lg leading-relaxed">
              Since our establishment in 1996, Montfort School Nagpur has been a beacon of educational excellence, 
              carrying forward the rich Montfortian tradition of holistic development and service to humanity. 
              Our journey reflects decades of commitment to nurturing young minds and shaping future leaders.
            </p>
          </div>
        </motion.div>

        {/* Historical Timeline */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Our Historical Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[#c5a059]/30" />
            
            {[
              { 
                year: '1996', 
                event: 'Foundation Year', 
                description: 'Montfort School Nagpur was established by the Brothers of St. Gabriel with a vision to provide quality education.',
                highlight: 'First batch of 120 students'
              },
              { 
                year: '1998', 
                event: 'First Batch Graduates', 
                description: 'Our first graduating class set the benchmark for academic excellence and character development.',
                highlight: '100% pass percentage'
              },
              { 
                year: '2002', 
                event: 'Infrastructure Expansion', 
                description: 'New academic block, science laboratories, and sports facilities were added to accommodate growing student strength.',
                highlight: 'State-of-the-art facilities'
              },
              { 
                year: '2008', 
                event: 'Golden Jubilee Celebration', 
                description: 'Celebrated 12 years of educational excellence with various cultural and academic initiatives.',
                highlight: 'Community outreach programs launched'
              },
              { 
                year: '2015', 
                event: 'Digital Transformation', 
                description: 'Integration of modern technology in classrooms and introduction of smart learning methodologies.',
                highlight: 'Smart classrooms implemented'
              },
              { 
                year: '2020', 
                event: 'Silver Jubilee Year', 
                description: '25 years of transforming lives through education, marked by numerous achievements and accolades.',
                highlight: 'Excellence in Education Award'
              },
              { 
                year: 'Present', 
                event: 'Continuing the Legacy', 
                description: 'Today, we stand as a premier educational institution with over 2,500 students and 140+ dedicated staff members.',
                highlight: 'Leading institution in Nagpur'
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1/2 px-6">
                  <motion.div 
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-[#c5a059]" size={20} />
                      <span className="font-bold text-[#c5a059]">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2e5a] mb-2">{milestone.event}</h3>
                    <p className="text-gray-600 mb-2">{milestone.description}</p>
                    <div className="inline-block px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold rounded-full">
                      {milestone.highlight}
                    </div>
                  </motion.div>
                </div>
                <div className="w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Campus Development */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Campus Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: 'Main Academic Block',
                description: 'Spacious classrooms with modern teaching aids and comfortable learning environment.',
                year: '1996'
              },
              {
                icon: GraduationCap,
                title: 'Science Laboratories',
                description: 'Well-equipped Physics, Chemistry, and Biology labs for practical learning.',
                year: '2002'
              },
              {
                icon: Award,
                title: 'Sports Complex',
                description: 'Comprehensive sports facilities including playgrounds, gymnasium, and swimming pool.',
                year: '2005'
              },
              {
                icon: Building,
                title: 'Library & Resource Center',
                description: 'Digital library with thousands of books and e-resources for research and learning.',
                year: '2008'
              },
              {
                icon: GraduationCap,
                title: 'Computer Labs',
                description: 'Advanced computer laboratories with high-speed internet and modern software.',
                year: '2015'
              },
              {
                icon: Award,
                title: 'Auditorium',
                description: 'Modern auditorium for cultural events, seminars, and school assemblies.',
                year: '2018'
              }
            ].map((facility, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="w-14 h-14 bg-[#1a2e5a]/10 rounded-full flex items-center justify-center group-hover:bg-[#c5a059]/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <facility.icon className="text-[#1a2e5a] group-hover:text-[#c5a059]" size={28} />
                  </motion.div>
                  <span className="text-sm font-bold text-[#c5a059]">{facility.year}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Milestones */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Achievements & Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2500+', label: 'Current Students' },
              { number: '140+', label: 'Dedicated Staff' },
              { number: '100%', label: 'Board Results' },
              { number: '500+', label: 'Alumni Success Stories' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold text-[#c5a059] mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Campus */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Our Campus</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 bg-[#c5a059]/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="text-[#c5a059]" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2e5a]">Location</h3>
                  <p className="text-gray-600">Gavshi Manapur, Wardha Road, Nagpur, 441108</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a2e5a">Campus Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>15-acre sprawling campus with lush greenery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Eco-friendly environment with sustainable practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Modern infrastructure blended with traditional values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Safe and secure learning environment</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?auto=format&fit=crop&q=80&w=600"
                alt="Montfort Campus"
                className="w-full rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a2e5a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeritageHistory;
