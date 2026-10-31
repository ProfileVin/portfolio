import Nav from './components/Nav'
import FreelanceProjects from './components/FreelanceProjects'
import { Hero, Experience, Skills, Certifications, Education, Contact, Footer } from './components/Sections'

function App() {
  return (
    <div id="top" className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <Nav />
      <div className="min-w-0 px-4 pb-8 sm:px-6 lg:py-6 lg:pr-8 lg:pl-2">
        <main className="space-y-6">
          <Hero />
          <FreelanceProjects />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
