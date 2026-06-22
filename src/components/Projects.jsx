import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'Maatiputra',
    subtitle: 'Smart Earth Insights',
    description: 'An AI-powered AgriTech platform helping farmers through soil analysis, weather forecasting, crop recommendations, and intelligent agricultural insights.',
    features: ['Soil Analysis', 'Crop Recommendation', 'Weather Forecast', 'AI Assistant', 'Agricultural Dashboard'],
    tech: ['React', 'JavaScript', 'APIs', 'AI Integration'],
    github: 'https://github.com/rathorepriyansh01',
    live: 'https://maatiputra.netlify.app/',
    color: '#00F5D4',
    emoji: '🌱',
    status: 'live',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 2,
    title: 'AI PDF Reader',
    subtitle: 'Intelligent Document Q&A',
    description: 'A Retrieval-Augmented Generation (RAG) application enabling users to upload PDFs and interact with documents using natural language queries.',
    features: ['PDF Upload', 'Semantic Search', 'Conversational AI', 'Context-Aware Answers'],
    tech: ['Python', 'Streamlit', 'LangChain', 'ChromaDB', 'RAG'],
    github: 'https://github.com/rathorepriyansh01',
    live: 'https://ragapp-konxnrgidb2s9tiypvb69x.streamlit.app/',
    color: '#7B61FF',
    emoji: '📄',
    status: 'live',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
  },
  {
    id: 3,
    title: 'EchoMind',
    subtitle: 'AI Podcast Summarizer',
    description: 'An AI-powered podcast analysis platform that converts lengthy podcasts into concise summaries and actionable insights.',
    features: ['Speech-to-Text', 'Podcast Summaries', 'Insight Extraction', 'Action Items'],
    tech: ['Python', 'Whisper', 'Streamlit', 'LangChain'],
    github: 'https://github.com/rathorepriyansh01',
    live: 'https://echomind-7zs38wersh7ta9kjbjdag4.streamlit.app/',
    color: '#38BDF8',
    emoji: '🎙️',
    status: 'live',
    gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 4,
    title: 'Lecture Analyst',
    subtitle: 'AI Study Companion',
    description: 'An AI study companion that generates notes, quizzes, flashcards, mind maps, and personalized study resources from lectures.',
    features: ['Notes Generator', 'Quiz Generator', 'Flashcards', 'Mind Maps', 'Voice Assistant', 'Study Planner'],
    tech: ['Python', 'AI/ML', 'NLP', 'Streamlit'],
    github: 'https://github.com/rathorepriyansh01',
    live: null,
    color: '#7B61FF',
    emoji: '📚',
    status: 'coming-soon',
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
  },
]

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative glass-card overflow-hidden group cursor-pointer"
      style={{
        border: `1px solid ${project.color}20`,
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}20` : '',
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: `radial-gradient(circle at top right, ${project.color}, transparent)` }}
      />

      {/* Status badge */}
      <div className="absolute top-4 right-4 z-10">
        {project.status === 'coming-soon' ? (
          <span className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(123, 97, 255, 0.2)', border: '1px solid rgba(123, 97, 255, 0.4)', color: '#7B61FF' }}
          >
            🚧 Coming Soon
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5"
            style={{ background: 'rgba(0, 245, 212, 0.15)', border: '1px solid rgba(0, 245, 212, 0.3)', color: '#00F5D4' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Live
          </span>
        )}
      </div>

      <div className="relative p-6 md:p-7">
        {/* Project header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
          >
            {project.emoji}
          </div>
          <div>
            <h3 className="text-white font-bold font-display text-xl mb-0.5">{project.title}</h3>
            <p className="text-sm" style={{ color: project.color }}>{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/65 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Features */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <FiLayers size={12} style={{ color: project.color }} />
            <span className="text-xs text-white/40 uppercase tracking-wider">Key Features</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.features.map((f) => (
              <span key={f} className="px-2 py-1 rounded-full text-xs"
                style={{ background: `${project.color}10`, color: `${project.color}CC`, border: `1px solid ${project.color}20` }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 rounded-md text-xs font-mono text-white/50 bg-white/5 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <FiGithub size={14} />
            GitHub
          </motion.a>
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-dark"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
            >
              <FiExternalLink size={14} />
              Live Demo
            </motion.a>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/40 bg-white/5 border border-white/10 cursor-not-allowed">
              <HiOutlineSparkles size={14} />
              In Development
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] opacity-5"
          style={{ background: 'radial-gradient(ellipse, #00F5D4 0%, transparent 70%)' }}
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
            // projects.featured
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            AI-powered applications solving real problems — from AgriTech to intelligent document processing.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/rathorepriyansh01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-3"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
