import React from 'react'
import Navbar from '../navbar/Navbar'
import Packagebanner from './Packagebanner'
import CoachingPackage from './CoachingPackage'
import PackagesFaqs from './PackagesFaqs'
import RecoveryCoach from './RecoveryCoach'
import Footer from '../footer/Footer'

function Package() {
  return (
    <>
    <Navbar/>
    <Packagebanner/>
    <CoachingPackage/>
    <PackagesFaqs/>
    <RecoveryCoach/>
    <Footer/>
    </>
  )
}

export default Package