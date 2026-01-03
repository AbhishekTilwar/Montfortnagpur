import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, BookOpen, Heart, Mail, Phone, GraduationCap, Calendar, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const MiddleSchoolIncharge = () => {
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
            Middle School Incharge
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Nurturing Young Minds During Critical Development Years
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Incharge Profile */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8 space-y-6">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Middle School Incharge"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a2e5a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-[#1a2e5a] mb-2">Ms. Emily Rodriguez</h3>
                <div className="flex items-center gap-2 text-[#c5a059] mb-4">
                  <GraduationCap size={16} />
                  <span className="font-medium">Middle School Incharge</span>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-[#c5a059]" size={16} />
                    <span>8+ Years in Education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-[#c5a059]" size={16} />
                    <span>M.A., B.Ed., M.Ed.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-[#c5a059]" size={16} />
                    <span>Child Psychology</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-[#1a2e5a] p-6 rounded-2xl shadow-lg text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-bold text-[#c5a059] mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#c5a059]" size={16} />
                    <span className="text-sm">+91 99750 47843</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#c5a059]" size={16} />
                    <span className="text-sm">middleschool@montfortnagpur.ac.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-[#c5a059]" size={16} />
                    <span className="text-sm">Grades 6-8 Coordinator</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Incharge's Message and Details */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Message */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Message from Middle School Incharge</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Dear Parents and Students,
                </p>
                <p className="text-lg leading-relaxed">
                  Welcome to the Middle School section of Montfort School Nagpur! These years (Grades 6-8) 
                  are crucial in a child's educational journey, marking the transition from primary to 
                  secondary education. As the Middle School Incharge, I am committed to making this transition 
                  smooth, engaging, and enriching for every student.
                </p>
                <p className="text-lg leading-relaxed">
                  Our middle school program is designed to challenge students academically while supporting 
                  their emotional and social development during these formative years. We focus on building 
                  strong foundations in core subjects while encouraging exploration, creativity, and critical 
                  thinking.
                </p>
                <p className="text-lg leading-relaxed">
                  I work closely with our dedicated team of teachers to ensure that each child receives 
                  personalized attention and support. We believe in creating a nurturing environment where 
                  students feel safe to express themselves, take risks, and develop confidence in their abilities.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-[#1a2e5a]">
                  With dedication to student growth,<br />
                  Ms. Emily Rodriguez<br />
                  Middle School Incharge
                </p>
              </div>
            </motion.div>

            {/* Middle School Philosophy */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Our Middle School Philosophy</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: 'Holistic Development',
                      description: 'Balancing academic growth with emotional and social development.'
                    },
                    {
                      icon: Target,
                      title: 'Skill Building',
                      description: 'Developing essential skills for higher education and life.'
                    },
                    {
                      icon: BookOpen,
                      title: 'Conceptual Learning',
                      description: 'Focus on understanding concepts rather than rote memorization.'
                    },
                    {
                      icon: Users,
                      title: 'Collaborative Environment',
                      description: 'Encouraging teamwork and peer learning experiences.'
                    }
                  ].map((philosophy, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <philosophy.icon className="text-[#c5a059]" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{philosophy.title}</h3>
                        <p className="text-gray-600">{philosophy.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Academic Programs */}
            <motion.div 
              className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-8 rounded-2xl shadow-lg text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Academic Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Core Subjects: Mathematics, Science, English, Social Studies',
                  'Language Programs: Hindi, Sanskrit, and Foreign Language options',
                  'STEM Integration: Robotics, Coding, and Science Laboratories',
                  'Arts & Creativity: Visual Arts, Music, Dance, and Drama',
                  'Physical Education: Sports, Yoga, and Fitness Programs',
                  'Life Skills: Communication, Leadership, and Problem Solving'
                ].map((program, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Zap className="text-[#c5a059] flex-shrink-0" size={20} />
                    <span className="text-gray-200">{program}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Student Support Systems */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Student Support Systems</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Academic Support',
                      description: 'Remedial classes, peer tutoring, and subject-specific help.',
                      icon: BookOpen
                    },
                    {
                      title: 'Counseling Services',
                      description: 'Personal and academic counseling for student well-being.',
                      icon: Heart
                    },
                    {
                      title: 'Parent-Teacher Interaction',
                      description: 'Regular meetings and communication channels for parents.',
                      icon: Users
                    },
                    {
                      title: 'Extra-curricular Activities',
                      description: 'Clubs, competitions, and enrichment programs.',
                      icon: Award
                    }
                  ].map((support, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <support.icon className="text-[#c5a059]" size={24} />
                        <h3 className="text-lg font-bold text-[#1a2e5a]">{support.title}</h3>
                      </div>
                      <p className="text-gray-600">{support.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Assessment Approach */}
            <motion.div 
              className="bg-[#c5a059]/10 p-8 rounded-2xl border-2 border-[#c5a059]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2e5a] mb-4">Our Assessment Approach</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p className="text-center">
                  We believe in continuous and comprehensive evaluation that goes beyond traditional testing. 
                  Our assessment methods include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#1a2e5a]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="text-[#1a2e5a]" size={32} />
                    </div>
                    <h3 className="font-bold text-[#1a2e5a] mb-2">Formative Assessment</h3>
                    <p className="text-sm">Regular feedback and progress tracking</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#1a2e5a]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="text-[#1a2e5a]" size={32} />
                    </div>
                    <h3 className="font-bold text-[#1a2e5a] mb-2">Summative Assessment</h3>
                    <p className="text-sm">Periodic evaluations and examinations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#1a2e5a]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-[#1a2e5a]" size={32} />
                    </div>
                    <h3 className="font-bold text-[#1a2e5a] mb-2">Portfolio Assessment</h3>
                    <p className="text-sm">Project work and practical demonstrations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSchoolIncharge;
