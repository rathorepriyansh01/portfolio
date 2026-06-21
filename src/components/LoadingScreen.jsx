import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb w-96 h-96 bg-primary/20 top-1/4 -left-48" style={{ animationDelay: '0s' }} />
          <div className="orb w-64 h-64 bg-secondary/20 bottom-1/4 -right-32" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-full p-[2px] profile-ring">
              <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center">
                <span className="text-3xl font-bold font-display gradient-text">PR</span>
              </div>
            </div>
            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="w-3 h-3 rounded-full bg-primary absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(0,245,212,0.8)]" />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold font-display gradient-text">Priyansh Rathore</h1>
            <p className="text-white/50 mt-2 text-sm tracking-widest uppercase">AI Developer</p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-64"
          >
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #00F5D4, #7B61FF)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
            <motion.p
              className="text-white/40 text-xs text-center mt-3 tracking-wider"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Initializing AI Systems...
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
