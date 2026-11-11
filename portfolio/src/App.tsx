// import Container from './components/Container'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'
export default function App() {
  return (
    <>
     <Preloader />
      <ScrollProgress/>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}