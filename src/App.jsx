import Nav from './components/Nav'
import FreelanceProjects from './components/FreelanceProjects'
import { Hero, Experience, Skills, Certifications, Education, Contact, Footer } from './components/Sections'

function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <FreelanceProjects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
