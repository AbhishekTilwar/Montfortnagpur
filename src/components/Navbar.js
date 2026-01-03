import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  GraduationCap,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// --- Theme Colors ---
// Primary: Navy Blue (#1a2e5a)
// Secondary: Gold/Sand (#c5a059)
// Accent: Clean White/Soft Gray

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', hasDropdown: true },
    { name: 'Academics', hasDropdown: true },
    { name: 'Infrastructure' },
    { name: 'Admission' },
    { name: 'Mandatory Disclosure' },
    { name: 'School Cabinet' },
    { name: 'Annual Report' },
    { name: 'Alumni' },
    { name: 'Gallery' },
    { name: 'Contact Us' }
  ];

  const aboutLinks = [
    { path: '/our-founder', name: 'Our Founder' },
    { path: '/brothers-of-st-gabriel', name: 'Brothers Of St Gabriel Society' },
    { path: '/heritage-history', name: 'Heritage & History Of School' },
    { path: '/montfortian-aims', name: 'Montfortian Aims' },
    { path: '/vision-mission', name: 'VISION AND MISSION' },
    { path: '/principal', name: 'Principal' },
    { path: '/vice-principal', name: 'Vice Principal' },
    { path: '/middle-school-incharge', name: 'Middle School Incharge' }
  ];

  const academicsLinks = [
    { path: '/academics-montfort', name: 'Academics @ Montfort' },
    { path: '/academic-coordinator', name: 'Message from Academic Cordinator' },
    { path: '/academic-calendar', name: 'Academic Calendar' },
    { path: '/assessment-evaluation', name: 'Assesment & Evaluation' },
    { path: '/undertaking', name: 'UNDERTAKING' },
    { path: '/class-strength', name: 'CLASS WISE STUDENTS STRENGTH 2023' },
    { path: '/achievers', name: 'Achievers' },
    { path: '/academic-rules', name: 'Academic Rules & Regulations' },
    { path: '/faculty-montfort', name: 'Faculty @ Montfort' },
    { path: '/pre-primary', name: 'Pre Primary' },
    { path: '/primary', name: 'Primary' },
    { path: '/high-school', name: 'High School' },
    { path: '/non-teaching-staff', name: 'Non Teaching Staff' },
    { path: '/admin-staff', name: 'Admin Staff' },
    { path: '/science-club', name: 'Science Club' },
    { path: '/editorial-club', name: 'Editorial Club' }
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 top-0 left-0 right-0 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1a2e5a] rounded-lg flex items-center justify-center">
              <GraduationCap className="text-[#c5a059]" size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-[#1a2e5a]' : 'text-white'}`}>
                MONTFORT
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}>
                Nagpur • Excellence in Education
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div className="relative">
                  <button
                    onClick={() => {
                      if (link.name === 'About Us') {
                        setAboutDropdown(!aboutDropdown);
                        setAcademicsDropdown(false);
                      } else if (link.name === 'Academics') {
                        setAcademicsDropdown(!academicsDropdown);
                        setAboutDropdown(false);
                      }
                    }}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isScrolled ? 'text-[#1a2e5a]' : 'text-white'
                    } hover:text-[#c5a059]`}
                  >
                    {link.name}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${
                        (link.name === 'About Us' && aboutDropdown) || 
                        (link.name === 'Academics' && academicsDropdown) 
                          ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {((link.name === 'About Us' && aboutDropdown) || 
                     (link.name === 'Academics' && academicsDropdown)) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        {(link.name === 'About Us' ? aboutLinks : academicsLinks).map((dropdownLink) => (
                          <Link
                            key={dropdownLink.path}
                            to={dropdownLink.path}
                            onClick={() => {
                              setAboutDropdown(false);
                              setAcademicsDropdown(false);
                            }}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              isActiveLink(dropdownLink.path)
                                ? 'bg-[#c5a059]/10 text-[#c5a059] font-semibold'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#c5a059]'
                            }`}
                          >
                            {dropdownLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path || '#'}
                  className={`text-sm font-medium hover:text-[#c5a059] transition-colors ${
                    isScrolled ? 'text-[#1a2e5a]' : 'text-white'
                  } ${isActiveLink(link.path) ? 'text-[#c5a059]' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button className="bg-[#c5a059] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#b08d4a] transition-all transform hover:scale-105 active:scale-95 shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-[#1a2e5a] rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-[#c5a059]" size={24} />
                    </div>
                    <span className="font-bold text-xl text-[#1a2e5a]">MONTFORT</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenu(false)}
                    className="text-[#1a2e5a]"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => {
                              if (link.name === 'About Us') {
                                setAboutDropdown(!aboutDropdown);
                                setAcademicsDropdown(false);
                              } else if (link.name === 'Academics') {
                                setAcademicsDropdown(!academicsDropdown);
                                setAboutDropdown(false);
                              }
                            }}
                            className="flex items-center justify-between w-full text-left text-[#1a2e5a] font-medium py-2"
                          >
                            {link.name}
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform ${
                                (link.name === 'About Us' && aboutDropdown) || 
                                (link.name === 'Academics' && academicsDropdown) 
                                  ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {((link.name === 'About Us' && aboutDropdown) || 
                             (link.name === 'Academics' && academicsDropdown)) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-2">
                                  {(link.name === 'About Us' ? aboutLinks : academicsLinks).map((dropdownLink) => (
                                    <Link
                                      key={dropdownLink.path}
                                      to={dropdownLink.path}
                                      onClick={() => {
                                        setAboutDropdown(false);
                                        setAcademicsDropdown(false);
                                        setMobileMenu(false);
                                      }}
                                      className={`block py-2 text-sm transition-colors ${
                                        isActiveLink(dropdownLink.path)
                                          ? 'text-[#c5a059] font-semibold'
                                          : 'text-gray-600 hover:text-[#c5a059]'
                                      }`}
                                    >
                                      {dropdownLink.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path || '#'}
                          onClick={() => setMobileMenu(false)}
                          className={`block text-[#1a2e5a] font-medium py-2 ${
                            isActiveLink(link.path) ? 'text-[#c5a059]' : ''
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <button className="w-full bg-[#c5a059] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#b08d4a] transition-all mt-6">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className={isScrolled ? 'text-[#1a2e5a]' : 'text-white'}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
