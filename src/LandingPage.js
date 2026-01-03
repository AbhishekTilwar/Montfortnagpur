import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, 
  BookOpen, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Star,
  Rocket,
  Trophy,
  Brain
} from 'lucide-react';
import Navbar from './components/Navbar';
import SocialMediaWidget from './components/SocialMediaWidget';

// --- Theme Colors ---
// Primary: Navy Blue (#1a2e5a)
// Secondary: Gold/Sand (#c5a059)
// Accent: Clean White/Soft Gray

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: 0
          }}
          animate={{
            rotate: 360,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Star 
            size={Math.random() * 4 + 2} 
            className="text-[#c5a059] opacity-60" 
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]" role="banner">
      <ParticleBackground />
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(26, 46, 90, 0.8) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(197, 160, 89, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(26, 46, 90, 0.6) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(26, 46, 90, 0.8) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Mouse-following glow effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#c5a059] opacity-20 blur-3xl z-0"
        animate={{
          x: mousePosition.x * window.innerWidth - 192,
          y: mousePosition.y * window.innerHeight - 192,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      {/* Animated Background Overlay */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/montfort.jpg" 
          alt="Montfort School Nagpur Campus - Premier CBSE School Building with Modern Infrastructure" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e5a]/80 via-transparent to-[#1a2e5a]" />
      </motion.div>

      <header className="relative z-10 text-center px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span 
          className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md text-[#c5a059] border border-white/20 text-xs font-bold tracking-widest uppercase mb-6"
          animate={{
            boxShadow: [
              "0 0 20px rgba(197, 160, 89, 0.3)",
              "0 0 40px rgba(197, 160, 89, 0.6)",
              "0 0 20px rgba(197, 160, 89, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="inline-flex items-center gap-2">
            <Sparkles className="animate-pulse" size={14} />
            Established 1996 • Legacy of St. Montfort
            <Sparkles className="animate-pulse" size={14} />
          </motion.div>
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">
            Nurturing Minds,
          </span>
          <span className="block text-[#c5a059] italic font-serif">
            Building Futures.
          </span>
        </h1>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Welcome to Montfort School Nagpur, where we transform potential into excellence through a child-centered approach and holistic development.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1a2e5a] font-bold rounded-xl flex items-center justify-center gap-2 transition-all group relative overflow-hidden hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              Explore Admissions <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold rounded-xl backdrop-blur-sm transition-all relative overflow-hidden group hover:scale-105">
            <span className="relative z-10">Virtual Tour</span>
          </button>
        </div>
      </motion.div>
    </header>

    {/* Floating Elements */}
    <motion.div
      animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="absolute top-20 left-10 text-[#c5a059] opacity-60"
    >
      <Rocket size={32} />
    </motion.div>
    
    <motion.div
      animate={{ y: [20, -20, 20], rotate: [0, -10, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-40 right-20 text-[#c5a059] opacity-50"
    >
      <Trophy size={28} />
    </motion.div>
    
    <motion.div
      animate={{ y: [-15, 15, -15], scale: [1, 1.2, 1] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute bottom-40 left-20 text-[#c5a059] opacity-40"
    >
      <Brain size={24} />
    </motion.div>
    
    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }} 
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
        <motion.div 
          className="w-1 h-2 bg-white rounded-full"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </motion.div>
  </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 flex flex-col items-start group relative overflow-hidden"
  >
    {/* Animated background gradient */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a]/5 to-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      initial={{ x: "-100%" }}
      whileHover={{ x: "0%" }}
      transition={{ duration: 0.5 }}
    />
    
    <motion.div 
      className="w-14 h-14 bg-[#1a2e5a]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a2e5a] transition-colors duration-500 relative z-10"
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="text-[#1a2e5a] group-hover:text-[#c5a059] transition-colors" size={28} />
    </motion.div>
    
    <h3 className="text-xl font-bold text-[#1a2e5a] mb-3 relative z-10">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">{desc}</p>
    
    <motion.button 
      className="flex items-center text-sm font-bold text-[#c5a059] group-hover:underline relative z-10"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.preventDefault()}
    >
      Learn More <ArrowUpRight size={16} className="ml-1" />
    </motion.button>
    
    {/* Floating particles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#c5a059] rounded-full opacity-0 group-hover:opacity-60"
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1, 0],
          x: [0, Math.random() * 100 - 50],
          y: [0, -Math.random() * 50 - 20],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.2,
          repeatDelay: 1
        }}
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 100}%`
        }}
      />
    ))}
  </motion.div>
);

const AnimatedStat = ({ value, label, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const targetValue = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);
  
  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.h4 
        className="text-4xl font-extrabold text-[#1a2e5a] mb-2"
        animate={{
          textShadow: [
            "0 0 0px rgba(26, 46, 90, 0)",
            "0 0 20px rgba(26, 46, 90, 0.3)",
            "0 0 0px rgba(26, 46, 90, 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5 }}
      >
        {count}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
      </motion.h4>
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const Stats = () => (
  <section className="py-20 bg-white relative overflow-hidden" aria-label="School Statistics">
    {/* Animated background pattern */}
    <motion.div
      className="absolute inset-0 opacity-5"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%']
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1a2e5a 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    />
    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
      {[
        { label: 'Students', val: '2500+' },
        { label: 'Experienced Staff', val: '140+' },
        { label: 'Years Legacy', val: '27+' },
        { label: 'Success Rate', val: '100%' },
      ].map((stat, i) => (
        <AnimatedStat key={i} value={stat.val} label={stat.label} delay={i * 0.1} />
      ))}
    </div>
  </section>
);

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="font-sans text-slate-900 selection:bg-[#c5a059] selection:text-white">
      <Navbar />
      <Hero />
      
      <Stats />

      {/* Philosophy Section with Parallax */}
      <section className="py-24 bg-gray-50 relative overflow-hidden" aria-label="School Philosophy">
        {/* Parallax background elements */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#1a2e5a]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#c5a059]/5 rounded-full blur-2xl" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c5a059]/20 rounded-full blur-2xl" />
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="/Brother-Jomon.jpg" 
                className="rounded-3xl shadow-2xl relative z-10"
                alt="Bro. Jomon Joy - Principal of Montfort School Nagpur"
                loading="lazy"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-[#1a2e5a] p-8 rounded-2xl z-20 shadow-xl hidden lg:block">
                <div className="mb-4">
                  <Sparkles className="text-[#c5a059]" />
                </div>
                <p className="text-white text-lg italic">"Education is a tool to transform society."</p>
                <p className="text-[#c5a059] text-sm mt-2 font-bold">— Bro. Jomon Joy, Principal</p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-[#c5a059] uppercase tracking-[0.3em] mb-4">
                Our Essence
              </h2>
              
              <h3 className="text-4xl font-bold text-[#1a2e5a] mb-6 leading-tight">
                A Legacy of Excellence in the Heart of Nagpur.
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Montfort School is well-aware of the importance of various stages of a student's life. Our curriculum is meticulously planned to identify and nurture inherent talents, ensuring body, mind, and spirit grow in harmony.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ChevronRight, text: "Child-Centered Learning" },
                  { icon: ChevronRight, text: "State-of-the-Art Labs" },
                  { icon: ChevronRight, text: "Co-Curricular Focus" },
                  { icon: ChevronRight, text: "Safe Campus Life" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <div className="mt-1 p-1 bg-green-100 rounded-full hover:scale-110 hover:rotate-180 transition-transform duration-300">
                      <item.icon size={14} className="text-green-600" />
                    </div>
                    <span className="font-medium text-[#1a2e5a]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Grid with Enhanced Animations */}
      <section className="py-24 relative overflow-hidden" aria-label="Academic Programs">
        {/* Background decoration */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(197, 160, 89, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(26, 46, 90, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(197, 160, 89, 0.05) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2e5a] mb-4">
              Educational Pillars
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Providing a comprehensive pathway for students from Pre-Primary to Senior Secondary levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={BookOpen} 
              title="Academics" 
              desc="CBSE curriculum integrated with modern pedagogical techniques for superior learning outcomes." 
              delay={0.1}
            />
            <FeatureCard 
              icon={Users} 
              title="Faculty" 
              desc="Over 140 dedicated educators committed to the holistic growth of every child." 
              delay={0.2}
            />
            <FeatureCard 
              icon={Award} 
              title="Achievements" 
              desc="Consistently producing merit-list toppers and state-level athletes." 
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Footer with Enhanced Animations */}
      <footer className="bg-[#0f172a] text-white py-16 relative overflow-hidden" role="contentinfo">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c5a059 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6 hover:scale-105 transition-transform duration-200">
              <div>
                <GraduationCap className="text-[#c5a059]" size={32} />
              </div>
              <span className="font-bold text-2xl tracking-tighter">MONTFORT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students to move from darkness to light through the wisdom of St. Montfort.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#c5a059]">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {["Admission Procedure", "School Magazine", "Photo Gallery", "Mandatory Disclosure"].map((link, i) => (
                <li key={i} className="hover:translate-x-1 transition-transform duration-200">
                  <button 
                    className="hover:text-white transition-colors text-left w-full"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#c5a059]">Reach Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                <MapPin size={18} className="text-[#c5a059] shrink-0" />
                <span>Gavshi Manapur, Wardha Road, Nagpur, 441108</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                <Phone size={18} className="text-[#c5a059] shrink-0" />
                <span>+91 99750 47841</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                <Mail size={18} className="text-[#c5a059] shrink-0" />
                <span>office@montfortnagpur.ac.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#c5a059]">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with our latest events and news.
            </p>
            <div className="flex overflow-hidden rounded-lg hover:scale-102 transition-transform duration-200">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border-none p-3 text-sm flex-grow focus:ring-1 focus:ring-[#c5a059] placeholder-gray-500 focus:bg-white/10 transition-colors duration-200"
              />
              <button className="bg-[#c5a059] px-4 hover:bg-[#b08d4a] hover:scale-105 transition-all duration-200">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Montfort School Nagpur. All Rights Reserved.
        </div>
      </footer>

      <SocialMediaWidget position="right" vertical={true} />
    </div>
  );
};

export default LandingPage;
