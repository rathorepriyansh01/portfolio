import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    date: '2024',
    color: '#00F5D4',
    icon: '🤖',
    description: 'Supervised learning, neural networks, and ML best practices.',
  },
  {
    title: 'LangChain for LLM Application Development',
    issuer: 'DeepLearning.AI',
    date: '2024',
    color: '#7B61FF',
    icon: '🔗',
    description: 'Building production LLM applications with LangChain framework.',
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'Coursera / AWS',
    date: '2024',
    color: '#38BDF8',
    icon: '🧠',
    description: 'Foundation models, fine-tuning, RLHF, and deployment strategies.',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM / Coursera',
    date: '2024',
    color: '#00F5D4',
    icon: '🐍',
    description: 'Data analysis, visualization, and ML with Python libraries.',
  },
  {
    title: 'Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    date: '2025',
    color: '#7B61FF',
    icon: '✍️',
    description: 'Advanced prompt engineering techniques and best practices.',
  },
  {
    title: 'RAG & Vector Databases',
    issuer: 'Weaviate Academy',
    date: '2025',
    color: '#38BDF8',
    icon: '🗄️',
    description: 'Building RAG pipelines and semantic search applications.',
  },
]

const CertCard = ({ cert, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 group hover:scale-[1.03] transition-all duration-400 relative overflow-hidden"
      style={{ border: `1px solid ${cert.color}20` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 25px ${cert.color}20`
        e.currentTarget.style.borderColor = `${cert.color}40`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderColor = `${cert.color}20`
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at top right, ${cert.color}, transparent)` }}
      />

      {/* Cert badge */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
        >
          {cert.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm leading-tight mb-1 line-clamp-2">{cert.title}</h3>
          <p className="text-xs" style={{ color: cert.color }}>{cert.issuer}</p>
        </div>
      </div>

      <p className="text-white/50 text-xs leading-relaxed mb-4">{cert.description}</p>

      <div className="flex items-center justify-between">
        <span className="px-2 py-1 rounded-full text-xs font-mono"
          style={{ background: `${cert.color}10`, color: `${cert.color}CC`, border: `1px solid ${cert.color}20` }}
        >
          📅 {cert.date}
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
          style={{
            background: `${cert.color}15`,
            color: cert.color,
            border: `1px solid ${cert.color}30`,
          }}
        >
          <FiExternalLink size={12} />
          View Cert
        </motion.button>
      </div>
    </motion.div>
  )
}

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-5"
          style={{ background: 'radial-gradient(circle, #00F5D4 0%, transparent 70%)' }}
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
            // certifications.verified
          </span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-subtitle">
            Continuously upgrading skills through structured learning and recognized certifications.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        {/* Achievement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 justify-center mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(0, 245, 212, 0.1)', border: '1px solid rgba(0, 245, 212, 0.2)' }}
          >
            <FiAward className="text-primary" />
            <span className="text-primary text-sm font-medium">{certifications.length}+ Certifications Earned</span>
            <HiOutlineSparkles className="text-primary" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
