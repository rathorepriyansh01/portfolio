import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/rathorepriyansh01', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/priyansh-rathore-69962b32b', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:rathorepriyansh01@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 245, 212, 0.3), rgba(123, 97, 255, 0.3), transparent)' }}
      />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-5"
        style={{ background: 'radial-gradient(ellipse, #00F5D4 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-2xl p-[1.5px] profile-ring">
              <div className="w-full h-full rounded-[14px] bg-dark flex items-center justify-center">
                <span className="text-base font-bold font-display gradient-text">PR</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold font-display text-xl">Priyansh <span className="gradient-text">Rathore</span></div>
              <div className="text-white/40 text-sm mt-1">AI Developer · AIML Student · Gen AI Enthusiast</div>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const el = document.querySelector(link.href)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-white/50 hover:text-primary transition-colors duration-300 text-sm"
              >
                {link.name}
              </button>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-primary transition-colors duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-[1px] bg-white/10" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-2 text-center"
          >
            <p className="text-white/40 text-sm flex items-center gap-1.5 flex-wrap justify-center">
              Designed & Developed by{' '}
              <span className="gradient-text font-semibold">Priyansh Rathore</span>
              {' '}· Built with{' '}
              <FiHeart className="text-red-400 inline" size={13} />
              {' '}using React & Framer Motion
            </p>
          </motion.div>

          <p className="text-white/25 text-xs text-center">
            © {new Date().getFullYear()} Priyansh Rathore. All rights reserved.
          </p>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center z-40 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #00F5D4, #7B61FF)',
            boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)',
          }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-dark font-bold" size={20} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
