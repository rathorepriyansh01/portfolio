import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiCopy, FiCheck, FiSend } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Personal Email',
    value: 'rathorepriyansh01@gmail.com',
    href: 'mailto:rathorepriyansh01@gmail.com',
    color: '#00F5D4',
    copyable: true,
  },
  {
    icon: FiMail,
    label: 'College Email',
    value: '0105al1154@oriental.ac.in',
    href: 'mailto:0105al1154@oriental.ac.in',
    color: '#38BDF8',
    copyable: true,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'priyansh-rathore-69962b32b',
    href: 'https://www.linkedin.com/in/priyansh-rathore-69962b32b',
    color: '#0A66C2',
    copyable: false,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'rathorepriyansh01',
    href: 'https://github.com/rathorepriyansh01',
    color: '#7B61FF',
    copyable: false,
  },
]

const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false)

  const copy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={copy}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-1.5 rounded-lg text-white/40 hover:text-primary transition-colors duration-300"
      title="Copy to clipboard"
    >
      {copied ? <FiCheck size={14} className="text-primary" /> : <FiCopy size={14} />}
    </motion.button>
  )
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate form submission
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-5"
          style={{ background: 'radial-gradient(ellipse, #00F5D4 0%, transparent 70%)' }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5"
          style={{ background: 'radial-gradient(circle, #7B61FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
            // contact.connect
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Get In Touch</h3>
              <p className="text-white/60 leading-relaxed">
                Whether you're looking for an AI developer for your project, want to collaborate on something exciting,
                or just want to say hi — my inbox is always open.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card group cursor-pointer"
                  style={{ border: `1px solid ${info.color}20` }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = `${info.color}40`}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = `${info.color}20`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                  >
                    <info.icon style={{ color: info.color }} size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/40 mb-0.5">{info.label}</div>
                    <div className="text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors">
                      {info.value}
                    </div>
                  </div>
                  {info.copyable && <CopyButton value={info.value} />}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card p-6"
              style={{ border: '1px solid rgba(0, 245, 212, 0.15)' }}
            >
              <p className="text-white/50 text-sm mb-4">Connect on Social Media</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/rathorepriyansh01"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/priyansh-rathore-69962b32b"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white/60 hover:text-[#0A66C2] transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:rathorepriyansh01@gmail.com"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white/60 hover:text-primary transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <FiMail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5"
              style={{ border: '1px solid rgba(0, 245, 212, 0.15)' }}
            >
              <h3 className="text-xl font-bold font-display text-white mb-6">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 245, 212, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 245, 212, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project collaboration, job opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 245, 212, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 text-sm mb-2" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 245, 212, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className="w-full py-3.5 rounded-xl font-semibold text-dark flex items-center justify-center gap-2 transition-all duration-300 disabled:cursor-not-allowed"
                style={{
                  background: sent ? 'linear-gradient(135deg, #00F5D4, #38BDF8)' : 'linear-gradient(135deg, #00F5D4, #38BDF8)',
                  opacity: sending ? 0.7 : 1,
                }}
              >
                {sent ? (
                  <>
                    <FiCheck size={18} />
                    Message Sent! ✨
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
