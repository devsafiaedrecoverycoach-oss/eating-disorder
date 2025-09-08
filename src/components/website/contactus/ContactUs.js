import React from 'react'
import Navbar from '../navbar/Navbar'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
import ContactPackage from './ContactPackage'
import ContactFaqs from './ContactFaqs'
import Footer from '../footer/Footer'
import CoachingPackage from '../packages/CoachingPackage'

function ContactUs() {
  return (
   <>
   <Navbar/>
   <ContactBanner/>
   <ContactForm/>
   {/* <ContactPackage/> */}
   <CoachingPackage/>
   <ContactFaqs/>
   <Footer/>

   </>
  )
}

export default ContactUs