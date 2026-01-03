import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Heart, Brain, Users, Shield, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const MontfortianAims = () => {
  const aims = [
    {
      icon: Heart,
      title: 'Character Formation',
      description: 'Building strong moral values and ethical principles that guide students throughout life.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Brain,
      title: 'Academic Excellence',
      description: 'Fostering intellectual curiosity and achieving highest standards in education.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Social Responsibility',
      description: 'Developing sense of responsibility towards society and commitment to service.',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      title: 'Spiritual Growth',
      description: 'Nurturing spiritual awareness and inner peace through meditation and reflection.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      title: 'Leadership Development',
      description: 'Cultivating leadership qualities and decision-making skills for future challenges.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Star,
      title: 'Creative Expression',
      description: 'Encouraging artistic talents and creative thinking in all forms of expression.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    }
  ];

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
            Montfortian Aims
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Guiding Principles for Holistic Development
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
              <Target className="text-white" size={40} />
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">Our Guiding Philosophy</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 text-center">
            <p className="text-lg leading-relaxed">
              The Montfortian aims are rooted in the vision of St. Louis Marie de Montfort, focusing on the 
              complete development of every student. We believe in nurturing not just the mind, but also the 
              body, spirit, and character of our students, preparing them to be responsible citizens and leaders 
              of tomorrow.
            </p>
          </div>
        </motion.div>

        {/* Core Aims Grid */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">Core Montfortian Aims</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aims.map((aim, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`w-16 h-16 ${aim.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <aim.icon className={`${aim.color}`} size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-3">{aim.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{aim.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Objectives */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-12 rounded-3xl shadow-xl text-white mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Educational Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Academic Development</h3>
              {[
                'Provide quality education that meets global standards',
                'Foster critical thinking and problem-solving skills',
                'Encourage research and innovation',
                'Promote lifelong learning habits'
              ].map((objective, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-[#c5a059] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap size={16} className="text-white" />
                  </motion.div>
                  <span className="text-gray-200">{objective}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#c5a059] mb-4">Personal Growth</h3>
              {[
                'Develop strong moral and ethical values',
                'Build self-confidence and self-esteem',
                'Cultivate leadership and teamwork skills',
                'Promote physical and mental well-being'
              ].map((objective, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-[#c5a059] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap size={16} className="text-white" />
                  </motion.div>
                  <span className="text-gray-200">{objective}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Implementation Strategy */}
        <motion.div 
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1a2e5a] text-center mb-12">How We Achieve Our Aims</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Curriculum Design',
                description: 'Comprehensive curriculum that balances academics, sports, arts, and moral education.',
                features: ['Integrated Learning', 'Value Education', 'Skill Development']
              },
              {
                title: 'Teaching Methods',
                description: 'Modern pedagogical approaches that cater to diverse learning styles and needs.',
                features: ['Interactive Learning', 'Project-Based Education', 'Technology Integration']
              },
              {
                title: 'Assessment System',
                description: 'Holistic evaluation that measures not just academic performance but overall development.',
                features: ['Continuous Assessment', 'Portfolio Evaluation', 'Formative Feedback']
              }
            ].map((strategy, index) => (
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
                  <Target className="text-[#1a2e5a]" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1a2e5a] mb-3">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="space-y-2">
                  {strategy.features.map((feature, i) => (
                    <div key={i} className="inline-block px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] text-sm font-semibold rounded-full mr-2 mb-2">
                      {feature}
                    </div>
                  ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1a2e5a] mb-4">For Students</h3>
              <ul className="space-y-3">
                {[
                  'Well-rounded personality with strong values',
                  'Academic excellence and practical skills',
                  'Leadership qualities and team spirit',
                  'Social consciousness and civic responsibility',
                  'Spiritual awareness and inner peace'
                ].map((outcome, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#1a2e5a] mb-4">For Society</h3>
              <ul className="space-y-3">
                {[
                  'Responsible citizens who contribute to nation-building',
                  'Leaders who uphold ethical values in public life',
                  'Professionals who excel with integrity',
                  'Individuals who promote peace and harmony',
                  'Change agents who work for social justice'
                ].map((outcome, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star className="text-[#c5a059] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MontfortianAims;
