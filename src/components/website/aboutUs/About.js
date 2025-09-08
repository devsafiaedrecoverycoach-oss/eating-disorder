import React from 'react'
import Navbar from '../navbar/Navbar'
import Aboutbanner from './Aboutbanner'
import Container  from './Container'
import Story from './Story'
import Sign from './Sign'
import Whychoose from './Whychoose'
import AboutContact from './AboutContact'
import AboutFaqs from './AboutFaqs'
import Footer from '../footer/Footer'

function About() {
  return (
    <>    
    <Navbar/>
    <Aboutbanner/>
    <Container/>
    <Story/>
    {/* <Sign/>
    <Whychoose/>
    <AboutContact/> */}
    <AboutFaqs/>
    <Footer/>
    </>

  )
}

export default About