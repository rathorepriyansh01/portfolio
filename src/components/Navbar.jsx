import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-dark/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl p-[1.5px] profile-ring">
              <div className="w-full h-full rounded-[10px] bg-dark flex items-center justify-center">
                <span className="text-sm font-bold font-display gradient-text">PR</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-white text-lg">Priyansh</span>
              <span className="gradient-text font-bold text-lg ml-1">Rathore</span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'rgba(0, 245, 212, 0.1)',
                      border: '1px solid rgba(0, 245, 212, 0.3)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 hover:text-white p-2"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-dark/95 border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary bg-primary/10 border border-primary/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm mt-2"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
