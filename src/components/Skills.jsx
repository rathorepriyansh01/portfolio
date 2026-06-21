import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython, SiScikitlearn, SiPandas, SiNumpy, SiSqlite,
  SiLangchain, SiFastapi, SiStreamlit, SiGit, SiGithub, SiNetlify, SiVercel,
  SiReact, SiJavascript,
} from 'react-icons/si'
import { FaFileExcel } from 'react-icons/fa'
import { FiDatabase, FiCpu, FiBarChart2, FiServer, FiTool } from 'react-icons/fi'
import { TbBrain } from 'react-icons/tb'

const skillCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: TbBrain,
    color: '#00F5D4',
    gradient: 'from-primary/20 to-transparent',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'Scikit-Learn', icon: SiScikitlearn, level: 80 },
      { name: 'Machine Learning', icon: FiCpu, level: 82 },
      { name: 'Model Evaluation', icon: FiBarChart2, level: 75 },
    ],
  },
  {
    id: 'gen-ai',
    title: 'Generative AI',
    icon: FiCpu,
    color: '#7B61FF',
    gradient: 'from-secondary/20 to-transparent',
    skills: [
      { name: 'LangChain', icon: SiLangchain, level: 85 },
      { name: 'LangGraph', icon: FiCpu, level: 75 },
      { name: 'RAG', icon: FiDatabase, level: 88 },
      { name: 'Vector Databases', icon: FiDatabase, level: 80 },
      { name: 'Prompt Engineering', icon: TbBrain, level: 90 },
      { name: 'AI Agents', icon: FiCpu, level: 78 },
    ],
  },
  {
    id: 'data',
    title: 'Data Analytics',
    icon: FiBarChart2,
    color: '#38BDF8',
    gradient: 'from-accent/20 to-transparent',
    skills: [
      { name: 'Pandas', icon: SiPandas, level: 88 },
      { name: 'NumPy', icon: SiNumpy, level: 85 },
      { name: 'SQL', icon: SiSqlite, level: 78 },
      { name: 'Excel', icon: FaFileExcel, level: 80 },
      { name: 'Data Visualization', icon: FiBarChart2, level: 75 },
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment & DevOps',
    icon: FiServer,
    color: '#00F5D4',
    gradient: 'from-primary/20 to-transparent',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, level: 82 },
      { name: 'Streamlit', icon: SiStreamlit, level: 90 },
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
      { name: 'Netlify', icon: SiNetlify, level: 80 },
      { name: 'Vercel', icon: SiVercel, level: 78 },
    ],
  },
  {
    id: 'tools',
    title: 'AI Productivity Tools',
    icon: FiTool,
    color: '#7B61FF',
    gradient: 'from-secondary/20 to-transparent',
    skills: [
      { name: 'Cursor', icon: FiTool, level: 92 },
      { name: 'GitHub Copilot', icon: SiGithub, level: 88 },
      { name: 'Google AI Studio', icon: TbBrain, level: 85 },
      { name: 'Antigravity', icon: FiCpu, level: 90 },
    ],
  },
]

const SkillCard = ({ category, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const colorMap = {
    '#00F5D4': 'rgba(0, 245, 212',
    '#7B61FF': 'rgba(123, 97, 255',
    '#38BDF8': 'rgba(56, 189, 248',
  }
  const rgba = colorMap[category.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 group hover:scale-[1.02] transition-all duration-500"
      style={{
        border: `1px solid ${rgba}, 0.15)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${rgba}, 0.15), 0 20px 60px rgba(0,0,0,0.4)`
        e.currentTarget.style.borderColor = `${rgba}, 0.3)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderColor = `${rgba}, 0.15)`
      }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${rgba}, 0.15)`, border: `1px solid ${rgba}, 0.3)` }}
        >
          <category.icon style={{ color: category.color }} size={20} />
        </div>
        <h3 className="font-semibold font-display text-white text-base">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 + 0.2 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <skill.icon size={14} style={{ color: category.color }} />
                <span className="text-white/80 text-sm">{skill.name}</span>
              </div>
              <span className="text-xs font-mono" style={{ color: category.color }}>{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 + i * 0.1 + 0.3, ease: 'easeOut' }}
                style={{ background: `linear-gradient(90deg, ${category.color}, ${rgba}, 0.6))` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5"
          style={{ background: 'radial-gradient(circle, #00F5D4 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5"
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
            // skills.stack
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies I wield to build intelligent, production-ready AI systems.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
