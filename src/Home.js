import React from 'react'
import Hero from './components/Hero';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Blogs from './components/Blogs';
import './App.css'
import Aboutpuspak from './components/Aboutpuspak';
import Contactsection from './components/Contactsection';

const Home = () => {
  return (
    <div style={{overflowX:"hidden;"}}>
      <div className="hero-container">
          <Hero />
        </div>

        <About/>
        <Aboutpuspak/>
        <Service/>
        <Testimonial/>
        <Blogs/>
        <Contactsection/>
    </div>
  )
}

export default Home

