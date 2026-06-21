import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineEvents = [
  {
    year: '2024',
    title: 'Started B.Tech AIML Journey',
    description: 'Enrolled in B.Tech CSE with specialization in AI & ML at Oriental Institute of Science and Technology, Bhopal. Began foundation in programming, mathematics, and core CS concepts.',
    tags: ['Python', 'Data Structures', 'Mathematics'],
    icon: '🎓',
    color: '#00F5D4',
    side: 'left',
  },
  {
    year: '2024',
    title: 'AI & ML Exploration Begins',
    description: 'Dived deep into Machine Learning fundamentals. Completed courses on supervised & unsupervised learning, model evaluation, and data preprocessing using Scikit-Learn and Pandas.',
    tags: ['Scikit-Learn', 'Pandas', 'NumPy', 'ML'],
    icon: '🤖',
    color: '#7B61FF',
    side: 'right',
  },
  {
    year: '2024-25',
    title: 'Generative AI Exploration',
    description: 'Discovered the power of Generative AI. Learned LangChain, RAG architectures, vector databases, and prompt engineering to build context-aware AI applications.',
    tags: ['LangChain', 'RAG', 'ChromaDB', 'Prompts'],
    icon: '🔮',
    color: '#38BDF8',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Building Real-World Projects',
    description: 'Moved from learning to building. Developed and deployed production-ready projects including AgriTech AI platforms, RAG-based PDF readers, and podcast analysis tools.',
    tags: ['FastAPI', 'Streamlit', 'Netlify', 'Vercel'],
    icon: '🚀',
    color: '#00F5D4',
    side: 'right',
  },
  {
    year: '2025',
    title: 'AI Agent Development',
    description: 'Explored agentic AI systems using LangGraph. Built multi-step AI agents capable of reasoning, planning, and executing complex tasks autonomously.',
    tags: ['LangGraph', 'AI Agents', 'Tool Calling'],
    icon: '⚡',
    color: '#7B61FF',
    side: 'left',
  },
  {
    year: '2025 - Now',
    title: 'Open Source & Continuous Learning',
    description: 'Actively contributing to open-source AI projects, participating in hackathons, and continuously upgrading skills with the latest AI developments and research.',
    tags: ['GitHub', 'Open Source', 'Hackathons'],
    icon: '🌟',
    color: '#38BDF8',
    side: 'right',
  },
]

const TimelineItem = ({ event, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = event.side === 'left'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-start gap-8 md:gap-12`}
    >
      {/* Content card */}
      <div className={`w-full md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div
          className="glass-card p-6 group hover:scale-[1.02] transition-all duration-500"
          style={{ border: `1px solid ${event.color}30` }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${event.color}20`}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
        >
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : 'flex-row'}`}>
            <span className="text-2xl">{event.icon}</span>
            <span className="text-xs font-mono font-medium px-2 py-1 rounded-full"
              style={{ background: `${event.color}15`, color: event.color, border: `1px solid ${event.color}30` }}
            >
              {event.year}
            </span>
          </div>
          <h3 className="text-white font-semibold text-base mb-2">{event.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">{event.description}</p>
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs"
                style={{
                  background: `${event.color}10`,
                  color: `${event.color}CC`,
                  border: `1px solid ${event.color}20`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-5 h-5 rounded-full border-2 z-10"
          style={{
            background: event.color,
            borderColor: event.color,
            boxShadow: `0 0 15px ${event.color}60`,
          }}
        />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
            // journey.timeline
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            From curious student to AI developer — a timeline of growth, learning, and building.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, #00F5D4 10%, #7B61FF 50%, #38BDF8 90%, transparent)' }}
          />

          {/* Mobile line */}
          <div
            className="md:hidden absolute left-6 top-0 bottom-0 w-[2px]"
            style={{ background: 'linear-gradient(180deg, #00F5D4, #7B61FF, #38BDF8)' }}
          />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
