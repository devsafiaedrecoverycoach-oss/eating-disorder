import React from 'react'
import BannerCompt from './BannerCompt'
import Navbar from '../navbar/Navbar'
import Rediscover from './Rediscover'
import Container  from './Conatiner'
import RecoveryCoach from './RecoveryCoach'
import Recovery from './Recovery'
import VirtualEating from './VirtualEating'
import Contact from './Contact'
import Faqs from './Faqs'
import Footer from '../footer/Footer'
import Podcast from '../podcast/Podcast'


function LandingPage() {
  return (
    <>
    <Navbar/>
     <BannerCompt/>
     <Rediscover/>
     <Container/>
     <RecoveryCoach/>
   <Podcast/>
     <Recovery/>
     <VirtualEating/>
     <Contact/>
     <Faqs/>
     <Footer/>
    </>
  )
}

export default LandingPage