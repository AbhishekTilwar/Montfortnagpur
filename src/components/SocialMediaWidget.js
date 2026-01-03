import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  CreditCard
} from 'lucide-react';

const SocialMediaWidget = ({ position = 'right', vertical = true, showLabel = false }) => {
  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/919975047841', label: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600' },
    { icon: Facebook, href: 'https://facebook.com/montfortschoolnagpur', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Youtube, href: 'https://youtube.com/montfortschoolnagpur', label: 'YouTube', color: 'bg-red-600 hover:bg-red-700' },
    { icon: Instagram, href: 'https://instagram.com/montfortschoolnagpur', label: 'Instagram', color: 'bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' },
    { icon: Twitter, href: 'https://twitter.com/montfortschoolnagpur', label: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: CreditCard, href: '/fees', label: 'Fees', color: 'bg-[#c5a059] hover:bg-[#b08d4a]' }
  ];

  const positionClasses = {
    right: 'fixed right-4 top-1/2 -translate-y-1/2',
    left: 'fixed left-4 top-1/2 -translate-y-1/2',
    'bottom-right': 'fixed right-4 bottom-8',
    'bottom-left': 'fixed left-4 bottom-8'
  };

  const containerClasses = vertical 
    ? 'flex flex-col gap-3' 
    : 'flex items-center gap-3';

  return (
    <motion.div
      initial={{ x: position.includes('right') ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={`${positionClasses[position]} z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-gray-100`}
    >
      <div className={containerClasses}>
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.label}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${vertical ? 'w-10 h-10' : 'w-8 h-8'} ${social.color} rounded-full flex items-center justify-center text-white transition-colors duration-300 shadow-lg hover:shadow-xl group`}
              aria-label={social.label}
            >
              <social.icon size={vertical ? 18 : 16} />
              {showLabel && (
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              )}
            </a>
          </motion.div>
        ))}

        {/* Branding */}
        {vertical && (
          <div className="border-t border-gray-200 pt-3 mt-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-center"
            >
              <motion.p
                animate={{
                  background: [
                    "linear-gradient(45deg, #1a2e5a, #c5a059)",
                    "linear-gradient(45deg, #c5a059, #1a2e5a)",
                    "linear-gradient(45deg, #1a2e5a, #c5a059)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-xs font-bold bg-gradient-to-r from-[#1a2e5a] to-[#c5a059] bg-clip-text text-transparent"
              >
                ACES
              </motion.p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[8px] text-gray-500 leading-tight"
              >
                Powered By
              </motion.p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-[8px] text-gray-500 leading-tight"
              >
                Multimedia
              </motion.p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SocialMediaWidget;
