import React from 'react'
import Home from './Home/page'
import About from './About/page'
import Projects from './Projects/page'
import Blog from './Blog/page'
import Contact from './Contact/page'
import Service from './Service/page'
import Fotter from './Fotter/page'
import Nav from '@/Components/Nav'
const page = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Service/>
      <Blog/>
      <Contact/>
      <Fotter/>
    </div>
    )
}

export default page