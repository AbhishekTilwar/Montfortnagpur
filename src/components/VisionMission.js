import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Target, Heart, Lightbulb, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const VisionMission = () => {
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
            Vision & Mission
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Guiding Our Journey Towards Educational Excellence
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
        {/* Vision Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.div 
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Eye className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-200">
              To be a premier educational institution that transforms students into enlightened citizens 
              equipped with wisdom, character, and skills to lead and serve humanity with excellence and integrity.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <motion.div 
              className="w-20 h-20 bg-[#1a2e5a] rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Target className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Provide quality education that fosters intellectual curiosity, critical thinking, and 
                academic achievement through innovative teaching methods and comprehensive curriculum.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Character Formation</h3>
              <p className="text-gray-600 leading-relaxed">
                Nurture strong moral values, ethical principles, and character development that 
                guides students to become responsible and compassionate individuals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Holistic Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Promote overall development through balanced focus on academics, sports, arts, 
                and co-curricular activities for well-rounded personality growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#c5a059] mb-4">Service to Society</h3>
              <p className="text-gray-600 leading-relaxed">
                Instill sense of social responsibility and commitment to community service, 
                encouraging students to contribute positively to society.
              </p>
            </div>
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
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Love & Compassion',
                description: 'Treating everyone with dignity, respect, and kindness',
                color: 'text-red-500',
                bgColor: 'bg-red-50'
              },
              {
                icon: Lightbulb,
                title: 'Wisdom & Knowledge',
                description: 'Pursuit of truth through continuous learning and reflection',
                color: 'text-yellow-500',
                bgColor: 'bg-yellow-50'
              },
              {
                icon: Users,
                title: 'Community & Service',
                description: 'Building inclusive communities through selfless service',
                color: 'text-green-500',
                bgColor: 'bg-green-50'
              },
              {
                icon: Award,
                title: 'Excellence & Integrity',
                description: 'Striving for highest standards with unwavering honesty',
                color: 'text-purple-500',
                bgColor: 'bg-purple-50'
              }
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
                  className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className={value.color} size={32} />
                </motion.div>
                <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educational Philosophy */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Educational Philosophy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Our Approach</h3>
              <div className="space-y-4">
                {[
                  'Child-centered education that respects individual differences',
                  'Integrated development of body, mind, and spirit',
                  'Learning through experience and practical application',
                  'Balancing tradition with modern educational practices',
                  'Creating safe, nurturing, and stimulating environment'
                ].map((principle, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-2" />
                    <span className="text-gray-600">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523050338691-c1e53d073f9b?auto=format&fit=crop&q=80&w=600"
                alt="Educational Philosophy"
                className="w-full rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a2e5a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Strategic Goals */}
        <motion.div 
          className="bg-gradient-to-r from-[#c5a059] to-[#b08d4a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Strategic Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Academic Excellence & Innovation',
              'Character & Value Education',
              'Technology Integration',
              'Teacher Development',
              'Infrastructure Enhancement',
              'Community Outreach'
            ].map((goal, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-lg font-bold mb-2">{goal}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Expected Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Citizens',
                description: 'Students who understand global issues and contribute to international harmony'
              },
              {
                icon: Users,
                title: 'Compassionate Leaders',
                description: 'Leaders who lead with empathy, integrity, and social responsibility'
              },
              {
                icon: Lightbulb,
                title: 'Innovative Thinkers',
                description: 'Creative problem-solvers who adapt to changing world challenges'
              }
            ].map((outcome, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#1a2e5a]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <outcome.icon className="text-[#1a2e5a]" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-3">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
