import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineChip } from 'react-icons/hi'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current
      if (!container) return
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (clientX - left - width / 2) / (width / 2)
      const y = (clientY - top - height / 2) / (height / 2)
      container.style.setProperty('--mouse-x', x)
      container.style.setProperty('--mouse-y', y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full -top-48 -left-48"
          style={{ background: 'radial-gradient(circle, rgba(0,245,212,0.2) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute w-[500px] h-[500px] rounded-full -bottom-32 -right-32"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.2) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute w-[400px] h-[400px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 right-[10%] w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-2xl hidden lg:flex"
      >
        🤖
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 left-[8%] w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-2xl hidden lg:flex"
      >
        🧠
      </motion.div>
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 left-[5%] w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-2xl hidden xl:flex"
      >
        ⚡
      </motion.div>
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        className="absolute top-48 left-[12%] w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-2xl hidden xl:flex"
      >
        🔬
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(0, 245, 212, 0.1)',
                border: '1px solid rgba(0, 245, 212, 0.3)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-tight mb-4"
            >
              <span className="text-white">Priyansh</span>
              <br />
              <span className="gradient-text">Rathore</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl font-mono text-primary mb-6 h-8"
            >
              <span className="text-white/60">{'< '}</span>
              <TypeAnimation
                sequence={[
                  'Machine Learning Engineer', 2000,
                  'Generative AI Developer', 2000,
                  'RAG Engineer', 2000,
                  'AI Agent Builder', 2000,
                  'Data Analytics Enthusiast', 2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                className="text-primary"
              />
              <span className="text-white/60">{' />'}</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              I build intelligent applications using{' '}
              <span className="text-primary font-medium">Artificial Intelligence</span>,{' '}
              <span className="text-secondary font-medium">Machine Learning</span>,{' '}
              <span className="text-accent font-medium">Generative AI</span>, and Data Analytics
              to solve real-world challenges.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                <HiOutlineChip className="text-lg" />
                View Projects
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload className="text-lg" />
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center gap-2"
              >
                <FiMail className="text-lg" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/rathorepriyansh01', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/priyansh-rathore-69962b32b', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/60 hover:text-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <div className="flex items-center gap-3 ml-2">
                <div className="w-8 h-[1px] bg-white/20" />
                <span className="text-white/40 text-sm">Follow me</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 80 }}
            className="relative order-1 lg:order-2 flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full p-[2px] profile-ring"
              >
                <div className="w-full h-full rounded-full bg-dark" />
              </motion.div>

              {/* Counter-rotating inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full"
                style={{ border: '1px dashed rgba(0, 245, 212, 0.3)' }}
              />

              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <img
                  src="/profile_themed.png"
                  alt="Priyansh Rathore - AI Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(5,8,22,0.65))' }}
                />
              </div>

              {/* Floating badges around the image */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 px-3 py-1.5 rounded-xl glass-card text-xs font-medium text-primary whitespace-nowrap"
                style={{ border: '1px solid rgba(0, 245, 212, 0.3)' }}
              >
                🤖 AI Developer
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-16 px-3 py-1.5 rounded-xl glass-card text-xs font-medium text-secondary whitespace-nowrap"
                style={{ border: '1px solid rgba(123, 97, 255, 0.3)' }}
              >
                🔮 Gen AI Enthusiast
              </motion.div>
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 right-12 px-3 py-1.5 rounded-xl glass-card text-xs font-medium text-accent whitespace-nowrap"
                style={{ border: '1px solid rgba(56, 189, 248, 0.3)' }}
              >
                📊 Data Analytics
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
