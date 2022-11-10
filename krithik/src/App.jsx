import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Experiences from './components/experience/Experiences'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </>
  )
}

export default App