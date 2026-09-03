import Nav from '../common/Nav'
import Home from '../sections/Home'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Expertise from '../sections/Expertise'
import Work from '../sections/Work'
import Startup from '../sections/Startup'
import Services from '../sections/Services'
import Achievements from '../sections/Achievements'
import Publication from '../sections/Publication'
import Blog from '../sections/Blog'
import SoftwareDevelopmentTraining from '../sections/SoftwareDevelopmentTraining'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Experience />
        <Expertise />
        <Work />
        <Startup />
        <Services />
        <Achievements />
        <Publication />
        <Blog />
        <SoftwareDevelopmentTraining />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
