import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      {loading && <LoadingScreen />}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <GitHub />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
