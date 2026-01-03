import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, BookOpen, Heart, Mail, Phone, GraduationCap, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const VicePrincipal = () => {
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
            Vice Principal's Desk
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Supporting Excellence in Education and Administration
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
          {/* Vice Principal Profile */}
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
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400"
                  alt="Vice Principal"
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
                <h3 className="text-2xl font-bold text-[#1a2e5a] mb-2">Dr. Sarah Thompson</h3>
                <div className="flex items-center gap-2 text-[#c5a059] mb-4">
                  <GraduationCap size={16} />
                  <span className="font-medium">Vice Principal</span>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-[#c5a059]" size={16} />
                    <span>12+ Years in Education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-[#c5a059]" size={16} />
                    <span>M.Sc., M.Ed., Ph.D.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-[#c5a059]" size={16} />
                    <span>Educational Administration</span>
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
                    <span className="text-sm">+91 99750 47842</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#c5a059]" size={16} />
                    <span className="text-sm">viceprincipal@montfortnagpur.ac.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-[#c5a059]" size={16} />
                    <span className="text-sm">Available for Students</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vice Principal's Message and Details */}
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
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Message from Vice Principal</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Dear Students, Parents, and Staff,
                </p>
                <p className="text-lg leading-relaxed">
                  As Vice Principal of Montfort School Nagpur, I am privileged to work alongside our 
                  dedicated team in creating an environment where excellence flourishes and every student 
                  can achieve their full potential. My role focuses on ensuring smooth academic operations, 
                  supporting our talented faculty, and maintaining the high standards that define our institution.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in fostering a culture of collaboration, innovation, and continuous improvement. 
                  Together with the Principal and our entire staff, we work tirelessly to provide our students 
                  with not just quality education, but also the guidance and support they need to navigate the 
                  challenges of modern life.
                </p>
                <p className="text-lg leading-relaxed">
                  My door is always open to students, parents, and staff members. I encourage open communication 
                  and welcome your suggestions as we strive to make Montfort School Nagpur even better.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-[#1a2e5a]">
                  With dedication and commitment,<br />
                  Dr. Sarah Thompson<br />
                  Vice Principal
                </p>
              </div>
            </motion.div>

            {/* Administrative Responsibilities */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Administrative Responsibilities</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Target,
                      title: 'Academic Coordination',
                      description: 'Overseeing curriculum implementation and academic standards.'
                    },
                    {
                      icon: Users,
                      title: 'Faculty Development',
                      description: 'Supporting teacher training and professional growth programs.'
                    },
                    {
                      icon: BookOpen,
                      title: 'Student Affairs',
                      description: 'Managing student discipline, welfare, and support services.'
                    },
                    {
                      icon: Award,
                      title: 'Examination Management',
                      description: 'Conducting fair and transparent assessment processes.'
                    },
                    {
                      icon: Heart,
                      title: 'Parent Communication',
                      description: 'Building strong parent-school partnerships.'
                    },
                    {
                      icon: Target,
                      title: 'Quality Assurance',
                      description: 'Ensuring educational quality and continuous improvement.'
                    }
                  ].map((responsibility, index) => (
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
                        <responsibility.icon className="text-[#c5a059]" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{responsibility.title}</h3>
                        <p className="text-gray-600">{responsibility.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Educational Initiatives */}
            <motion.div 
              className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-8 rounded-2xl shadow-lg text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Educational Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Digital Learning Integration Program',
                  'STEM Education Enhancement',
                  'Life Skills Development Curriculum',
                  'Environmental Education Initiatives',
                  'Mental Health and Well-being Programs',
                  'Career Guidance and Counseling'
                ].map((initiative, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Award className="text-[#c5a059] flex-shrink-0" size={20} />
                    <span className="text-gray-200">{initiative}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Philosophy */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Academic Philosophy</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  My academic philosophy is rooted in the belief that education should be transformative, 
                  not just informative. We aim to create learning experiences that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Encourage critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Promote collaborative learning and teamwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Integrate technology with traditional teaching methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Foster creativity and innovation in learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c5a059] rounded-full mt-3" />
                    <span>Build character and values alongside academic excellence</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Student Support */}
            <motion.div 
              className="bg-[#c5a059]/10 p-8 rounded-2xl border-2 border-[#c5a059]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#1a2e5a] mb-4">Commitment to Student Success</h2>
              <p className="text-lg text-gray-700 text-center">
                "Every student has unique potential and deserves personalized support. 
                My commitment is to ensure that each child receives the guidance, 
                resources, and encouragement needed to succeed academically and personally."
              </p>
              <p className="text-center text-[#c5a059] font-bold mt-4">- Dr. Sarah Thompson</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VicePrincipal;
