import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const OurFounder = () => {
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
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2 }}
        >
          <img 
            src="/founder.jpg" 
            alt="St. Louis Marie de Montfort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e5a]/80 via-transparent to-[#1a2e5a]" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 z-0"
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
            Our Founder
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            St. Louis Marie de Montfort - A Visionary of Faith and Education
          </motion.p>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
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
          {/* Founder Image and Basic Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/louis.jpeg"
                  alt="St. Louis Marie de Montfort"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a2e5a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              
              <motion.div 
                className="mt-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-[#1a2e5a] mb-2">St. Louis Marie de Montfort</h3>
                <div className="flex items-center gap-2 text-[#c5a059] mb-4">
                  <Calendar size={16} />
                  <span className="font-medium">1673 - 1716</span>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Star className="text-[#c5a059]" size={16} />
                    <span>Priest and Missionary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="text-[#c5a059]" size={16} />
                    <span>Founder of Montfortian Institutions</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Detailed Content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Early Life */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Early Life</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>ST. LOUIS MARIE GRIGNION DE MONTFORT</strong> was born on January 1673 in a small Town called Montfort. 
                  His parents named him 'Louis'. His mother was a pious woman who worked hard to educate and bring up the large family. 
                  From his early age he was devoted to Blessed Virgin Mary. Montfort's devotion to the Mother of Lord Jesus was an 
                  integral part of his spiritual life.
                </p>
                <p>
                  At the age of eleven he went to Rennes to study in a Jesuit Institution. After 8 years of study, he left for Paris 
                  to study at St. Sulpice seminary to become a priest. On his way he crossed a bridge called 'Cesson' and took a 
                  radical decision never to be attached to any worldly possessions or material goods and to live a life of total 
                  dependence to God.
                </p>
                <p>
                  He gave away everything to the poor and even exchanged his clothes with a beggar. He felt that 'God alone' was his 
                  Father and Blessed Virgin Mary, his Mother. He prepared well for his future ministry as a priest by reading most 
                  of the books in the library and spending a lot of time in prayer. He paid his fees watching over dead bodies at night.
                </p>
              </div>
            </motion.div>

            {/* Priesthood and Mission */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Priesthood and Mission</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  He was ordained a priest in 1700 overcoming a lot of difficulties and problems. Throughout his life he worked with 
                  the poor, orphans, destitutes, widows, lepers and the sick. He lived the Gospel radically and challenged the 
                  rich who refused to share their wealth with the poor and the needy.
                </p>
                <p>
                  He went from parish to parish as a vagabond preaching numerous missions and bringing people back to God. 
                  In many places he constructed Calvaries and statues to facilitate people to reflect on the mystery of the cross 
                  and salvation. He was a mystic living like Jesus.
                </p>
                <p>
                  Yet he found time to write many books and poems such as - True devotion to Blessed Virgin, Love of Eternal Wisdom, 
                  Letter to the Friends of the Cross, The Secret of the Rosary, The Secret of Mary, and many other hymns.
                </p>
              </div>
            </motion.div>

            {/* Challenges and Journey to Rome */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Challenges and Journey to Rome</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Due to his prophetic role in the society and radical life as a true disciple of Christ, he had many enemies. 
                  He walked all the way to Rome covering nearly 1200 kms to meet Pope Clement XI, in 1706.
                </p>
                <p>
                  His love for the cross and his absolute trust in God made him declare "No Cross what a cross", which ultimately 
                  became his philosophy and watch word.
                </p>
              </div>
            </motion.div>

            {/* Educational Work */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2e5a] mb-6">Educational Work</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  He started many schools for the poor & the youth. Worn out by his apostolate, weakened by his life of poverty 
                  and attempts on his life, he collapsed during a mission at Saint-Laurent-sur-Sèvre and died on April 28, 1716 
                  at the age of 43.
                </p>
              </div>
            </motion.div>

            {/* Legacy and Canonization */}
            <motion.div 
              className="bg-gradient-to-r from-[#1a2e5a] to-[#2a3e6a] p-8 rounded-2xl shadow-lg text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Legacy and Canonization</h2>
              <div className="space-y-4">
                <p className="text-gray-200">
                  People acclaimed Montfort a Saint followed by the church. Pope Pius XII canonized Montfort on July 27, 1947. 
                  Three congregations trace their foundation to St. Louis de Montfort. They are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>Daughters of Wisdom</li>
                  <li>Company of Mary</li>
                  <li>Brothers of St. Gabriel</li>
                </ul>
                <p className="text-gray-200">
                  They continue the work and mission of Montfort all over the world.
                </p>
              </div>
            </motion.div>

            {/* Famous Quote */}
            <motion.div 
              className="bg-[#c5a059]/10 p-8 rounded-2xl border-2 border-[#c5a059]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <blockquote className="text-2xl font-serif text-[#1a2e5a] italic text-center">
                "No Cross what a cross"
              </blockquote>
              <p className="text-center text-[#c5a059] font-bold mt-4">- St. Louis Marie de Montfort</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
