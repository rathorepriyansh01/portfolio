import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiTarget } from 'react-icons/fi'
import { HiOutlineAcademicCap, HiOutlineLightBulb } from 'react-icons/hi'

const stats = [
  { label: 'AI Projects', value: '10+', icon: FiCpu, color: '#00F5D4' },
  { label: 'Technologies', value: '25+', icon: FiCode, color: '#7B61FF' },
  { label: 'Deployments', value: '5+', icon: FiDatabase, color: '#38BDF8' },
  { label: 'Focus Areas', value: '4', icon: FiTarget, color: '#00F5D4' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5 rounded-full"
          style={{ background: 'radial-gradient(ellipse, #7B61FF 0%, transparent 70%)' }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
            // about.me
          </span>
          <h2 className="section-title">
            Who Am <span className="gradient-text">I?</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative glass-card p-8 overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                style={{ background: 'radial-gradient(circle at top right, #00F5D4, transparent)' }}
              />
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 rounded-tr-full"
                style={{ background: 'radial-gradient(circle at bottom left, #7B61FF, transparent)' }}
              />

              {/* Code terminal mockup */}
              <div className="bg-dark/80 rounded-xl border border-white/10 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-dark/60">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-white/30 text-xs ml-2 font-mono">priyansh@ai-dev ~ about.py</span>
                </div>
                {/* Terminal content */}
                <div className="p-5 font-mono text-sm space-y-2">
                  <div><span className="text-secondary">class</span> <span className="text-primary">PriyanshRathore</span><span className="text-white">:</span></div>
                  <div className="pl-4"><span className="text-white/50">"""</span></div>
                  <div className="pl-4"><span className="text-white/50">AI Developer & AIML Student</span></div>
                  <div className="pl-4"><span className="text-white/50">"""</span></div>
                  <div className="pl-4 mt-2">
                    <span className="text-secondary">def</span> <span className="text-accent">__init__</span><span className="text-white">(self):</span>
                  </div>
                  <div className="pl-8"><span className="text-white">self.name = </span><span className="text-primary">"Priyansh Rathore"</span></div>
                  <div className="pl-8"><span className="text-white">self.role = </span><span className="text-primary">"AI Developer"</span></div>
                  <div className="pl-8"><span className="text-white">self.location = </span><span className="text-primary">"Bhopal, India"</span></div>
                  <div className="pl-8"><span className="text-white">self.passion = [</span></div>
                  <div className="pl-12"><span className="text-primary">"Generative AI"</span><span className="text-white">,</span></div>
                  <div className="pl-12"><span className="text-primary">"Machine Learning"</span><span className="text-white">,</span></div>
                  <div className="pl-12"><span className="text-primary">"RAG Systems"</span><span className="text-white">,</span></div>
                  <div className="pl-12"><span className="text-primary">"AI Agents"</span></div>
                  <div className="pl-8"><span className="text-white">]</span></div>
                  <div className="pl-4 mt-2 flex items-center">
                    <span className="text-white/50">$ </span>
                    <span className="w-2 h-4 ml-1 bg-primary animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map(({ label, value, icon: Icon, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="glass-card p-4 text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <Icon size={20} className="mx-auto mb-2" style={{ color }} />
                    <div className="text-2xl font-bold font-display" style={{ color }}>{value}</div>
                    <div className="text-white/50 text-xs mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I am a{' '}
                <span className="text-primary font-semibold">B.Tech Computer Science Engineering (AIML)</span>{' '}
                student passionate about Artificial Intelligence, Machine Learning, Generative AI, and Data Analytics.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                My focus is on building <span className="text-secondary font-medium">intelligent systems</span>,{' '}
                AI-powered assistants, <span className="text-accent font-medium">Retrieval-Augmented Generation (RAG)</span> solutions,
                and impactful applications that bridge technology with real-world needs.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                I enjoy learning new technologies, participating in innovation-driven projects, and creating products
                that deliver <span className="text-primary font-medium">measurable value</span>.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 relative overflow-hidden"
              style={{ border: '1px solid rgba(0, 245, 212, 0.2)' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10"
                style={{ background: 'radial-gradient(circle at top right, #00F5D4, transparent)' }}
              />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0, 245, 212, 0.1)', border: '1px solid rgba(0, 245, 212, 0.3)' }}
                >
                  <HiOutlineAcademicCap className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">B.Tech - CSE (AI & ML)</h3>
                  <p className="text-primary/80 text-sm font-medium mb-1">Oriental Institute of Science & Technology, Bhopal</p>
                  <p className="text-white/40 text-xs">Expected Graduation: 2028</p>
                </div>
              </div>
            </motion.div>

            {/* Key interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineLightBulb className="text-primary text-xl" />
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Core Interests</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Generative AI', 'RAG Systems', 'AI Agents', 'LLM Fine-tuning', 'ML Engineering', 'Data Analytics'].map((interest) => (
                  <span key={interest} className="skill-pill text-xs">{interest}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
