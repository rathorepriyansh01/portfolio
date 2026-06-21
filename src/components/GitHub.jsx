import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiStar, FiGitCommit, FiCode } from 'react-icons/fi'

const GitHub = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const username = 'rathorepriyansh01'

  // GitHub stats cards using shields.io badges embedded in iframes approach
  // We use GitHub readme stats cards
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=00F5D4&text_color=ffffff&icon_color=7B61FF&bg_color=0d1438`
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=00F5D4&text_color=ffffff&bg_color=0d1438&langs_count=8`
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=00F5D4&ring=7B61FF&fire=38BDF8&currStreakLabel=00F5D4&sideLabels=ffffff&dates=ffffff80&sideNums=ffffff`
  const contribUrl = `https://ghchart.rshah.org/${username}`

  const profileLinks = [
    { label: 'GitHub Profile', icon: FiGithub, href: `https://github.com/${username}`, color: '#00F5D4' },
    { label: 'Repositories', icon: FiCode, href: `https://github.com/${username}?tab=repositories`, color: '#7B61FF' },
    { label: 'Stars Given', icon: FiStar, href: `https://github.com/${username}?tab=stars`, color: '#38BDF8' },
    { label: 'Contributions', icon: FiGitCommit, href: `https://github.com/${username}`, color: '#00F5D4' },
  ]

  return (
    <section id="github" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-5"
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
            // github.activity
          </span>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">
            Open source contributions and coding activity — visible proof of continuous learning and building.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }} />
        </motion.div>

        {/* Profile link card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-8 py-4 rounded-2xl glass-card"
            style={{ border: '1px solid rgba(0, 245, 212, 0.3)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0, 245, 212, 0.15)', border: '1px solid rgba(0, 245, 212, 0.3)' }}
            >
              <FiGithub className="text-primary text-2xl" />
            </div>
            <div>
              <div className="text-white font-semibold font-display">@{username}</div>
              <div className="text-white/50 text-sm">github.com/{username}</div>
            </div>
            <div className="ml-4 px-3 py-1 rounded-full text-xs"
              style={{ background: 'rgba(0, 245, 212, 0.1)', color: '#00F5D4', border: '1px solid rgba(0, 245, 212, 0.3)' }}
            >
              View Profile →
            </div>
          </motion.a>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-1 overflow-hidden rounded-2xl"
            style={{ border: '1px solid rgba(0, 245, 212, 0.15)' }}
          >
            <div className="relative bg-dark-200 rounded-xl overflow-hidden">
              <div className="absolute inset-0 shimmer-bg" />
              <img
                src={statsUrl}
                alt="Priyansh's GitHub Stats"
                className="w-full h-auto relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              {/* Fallback content */}
              <div className="p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FiGithub className="text-primary" />
                  GitHub Statistics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Repositories', value: '10+', icon: FiCode },
                    { label: 'Contributions', value: '200+', icon: FiGitCommit },
                    { label: 'Stars Earned', value: '5+', icon: FiStar },
                    { label: 'Followers', value: 'Growing', icon: FiGithub },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="glass-card p-3 text-center">
                      <Icon className="text-primary mx-auto mb-1" size={16} />
                      <div className="text-white font-bold text-lg">{value}</div>
                      <div className="text-white/50 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-1 overflow-hidden rounded-2xl"
            style={{ border: '1px solid rgba(123, 97, 255, 0.15)' }}
          >
            <div className="relative bg-dark-200 rounded-xl overflow-hidden">
              <div className="absolute inset-0 shimmer-bg" />
              <img
                src={langsUrl}
                alt="Top Languages"
                className="w-full h-auto relative z-10"
                onError={(e) => e.target.style.display = 'none'}
              />
              {/* Fallback content for top languages */}
              <div className="p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FiCode className="text-secondary" />
                  Top Languages
                </h3>
                <div className="space-y-3">
                  {[
                    { lang: 'Python', percent: 70, color: '#3776AB' },
                    { lang: 'JavaScript', percent: 15, color: '#F7DF1E' },
                    { lang: 'HTML/CSS', percent: 10, color: '#E34F26' },
                    { lang: 'SQL', percent: 5, color: '#336791' },
                  ].map(({ lang, percent, color }) => (
                    <div key={lang}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70 text-sm">{lang}</span>
                        <span className="text-white/50 text-xs">{percent}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.6 }}
                          style={{ background: color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-6 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(0, 245, 212, 0.1)' }}
        >
          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
            <FiGitCommit className="text-primary" />
            Contribution Activity
          </h3>
          <div className="overflow-hidden rounded-xl bg-dark-200/50 p-4">
            <img
              src={contribUrl}
              alt="GitHub Contribution Graph"
              className="w-full h-auto opacity-80"
              style={{ filter: 'hue-rotate(150deg) saturate(1.5)' }}
              onError={(e) => {
                e.target.parentElement.innerHTML = `
                  <div class="text-center py-12 text-white/40">
                    <div class="text-4xl mb-3">📊</div>
                    <p class="text-sm">Contribution graph loading...</p>
                    <a href="https://github.com/${username}" target="_blank" class="text-primary text-xs mt-2 block hover:underline">
                      View on GitHub →
                    </a>
                  </div>
                `
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHub
