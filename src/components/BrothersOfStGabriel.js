import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Users, Heart, BookOpen, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const BrothersOfStGabriel = () => {
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
            Brothers of St. Gabriel
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            A Legacy of Educational Excellence and Service to Humanity
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
              <Users className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">Who We Are</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 text-center">
            <p className="text-lg leading-relaxed">
              The Brothers of St. Gabriel is a worldwide religious congregation of the Catholic Church, 
              founded in 1703 by St. Louis Marie de Montfort. With a rich heritage spanning over three centuries, 
              we are dedicated to education, social service, and spiritual development across the globe.
            </p>
          </div>
        </motion.div>

        {/* History Timeline */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Our Journey Through Time</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[#c5a059]/30" />
            
            {[
              { year: '1703', event: 'Foundation by St. Louis Marie de Montfort', description: 'The congregation was established in France with a mission to educate the poor and marginalized.' },
              { year: '1841', event: 'Expansion to India', description: 'The first Gabriel Brothers arrived in India, beginning a new chapter of educational service.' },
              { year: '1903', event: 'Montfort Institutions', description: 'Establishment of first Montfort schools in India, laying foundation for educational excellence.' },
              { year: '1996', event: 'Montfort Nagpur Founded', description: 'Montfort School Nagpur was established, carrying forward the legacy of quality education.' },
              { year: 'Present', event: 'Global Presence', description: 'Over 2,000 institutions worldwide, educating millions of students across 30+ countries.' }
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
                    <p className="text-gray-600">{milestone.description}</p>
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

        {/* Core Values */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Compassion', description: 'Love and care for all, especially the marginalized and needy.' },
              { icon: BookOpen, title: 'Wisdom', description: 'Pursuit of knowledge and truth through holistic education.' },
              { icon: Award, title: 'Excellence', description: 'Striving for the highest standards in all endeavors.' },
              { icon: Globe, title: 'Service', description: 'Dedication to serving humanity and society.' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#1a2e5a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a059]/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="text-[#1a2e5a] group-hover:text-[#c5a059]" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Impact */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-[#c5a059] mb-2">30+</div>
              <div className="text-xl">Countries</div>
            </motion.div>
            <motion.div 
              className="p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-[#c5a059] mb-2">2,000+</div>
              <div className="text-xl">Educational Institutions</div>
            </motion.div>
            <motion.div 
              className="p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold text-[#c5a059] mb-2">2M+</div>
              <div className="text-xl">Students Educated</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-8">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg leading-relaxed text-center mb-8">
              As Brothers of St. Gabriel, we are committed to continuing the legacy of St. Louis Marie de Montfort 
              by providing quality education that transforms lives and communities. Our mission encompasses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a2e5a]">Educational Excellence</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Providing holistic education for overall development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Fostering critical thinking and creativity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Promoting values-based education</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a2e5a]">Social Service</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Serving the marginalized and underprivileged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Promoting social justice and equality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span>Building inclusive communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrothersOfStGabriel;
