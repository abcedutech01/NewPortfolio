import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Frameworks from './components/Frameworks'
import Hackathons from './components/Hackathons'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <Header/>
      <Skills/>
      <Frameworks/>
      <Hackathons/>
      <Projects/>
      <Tools/>
      <Events/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
