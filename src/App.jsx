import Navbar from '../../my-portfolio/src/components/Navbar'
import Home from '../../my-portfolio/src/components/Home'
import SocialLinks from './SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import ContactForm from './components/ContactForm'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='experience' element={<Experience />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<ContactForm />} />
      </Routes>

      <SocialLinks />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <ContactForm />
    </>
  )
}

export default App
