import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCpu, FiCode, FiServer, FiZap } from 'react-icons/fi'

const CustomCountUp = ({ start = 0, end, duration = 2.5, delay = 0 }) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTimestamp = null
    let animationFrameId

    const startAnimation = () => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        const easeProgress = progress * (2 - progress) // easeOutQuad
        
        setCount(Math.floor(easeProgress * (end - start) + start))
        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step)
        }
      }
      animationFrameId = window.requestAnimationFrame(step)
    }

    let timeoutId
    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay * 1000)
    } else {
      startAnimation()
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
    }
  }, [start, end, duration, delay])

  return <>{count}</>
}

const achievements = [
  {
    value: 10,
    suffix: '+',
    label: 'AI Projects Completed',
    icon: FiCpu,
    color: '#00F5D4',
    description: 'End-to-end production applications',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Technologies Learned',
    icon: FiCode,
    color: '#7B61FF',
    description: 'Frameworks, libraries & tools',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Deployments',
    icon: FiServer,
    color: '#38BDF8',
    description: 'Live applications deployed',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Problems Solved',
    icon: FiZap,
    color: '#00F5D4',
    description: 'Coding challenges & practice',
  },
]

const CounterCard = ({ achievement, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
      className="glass-card p-8 text-center group hover:scale-[1.05] transition-all duration-500 relative overflow-hidden"
      style={{ border: `1px solid ${achievement.color}20` }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 30px ${achievement.color}20`}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${achievement.color}08 0%, transparent 70%)` }}
      />

      {/* Icon */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
        style={{
          background: `${achievement.color}15`,
          border: `1px solid ${achievement.color}30`,
          boxShadow: `0 0 20px ${achievement.color}20`,
        }}
      >
        <achievement.icon size={28} style={{ color: achievement.color }} />
      </motion.div>

      {/* Counter */}
      <div className="mb-2">
        <span
          className="text-5xl md:text-6xl font-bold font-display"
          style={{ color: achievement.color }}
        >
          {isInView ? (
            <CustomCountUp
              start={0}
              end={achievement.value}
              duration={2.5}
              delay={index * 0.2}
            />
          ) : 0}
        </span>
        <span className="text-4xl md:text-5xl font-bold font-display" style={{ color: achievement.color }}>
          {achievement.suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="text-white font-semibold text-base mb-2">{achievement.label}</h3>
      <p className="text-white/40 text-sm">{achievement.description}</p>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)` }}
      />
    </motion.div>
  )
}

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] opacity-5"
          style={{ background: 'radial-gradient(ellipse, #7B61FF 0%, transparent 70%)' }}
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
            // achievements.stats
          </span>
          <h2 className="section-title">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="section-subtitle">
            Metrics that reflect my growth, learning, and dedication to building with AI.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <CounterCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
