import React from 'react'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Service from './Service/Service'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutMe />
      <Service />
      <Project />
      <Skills />
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home
