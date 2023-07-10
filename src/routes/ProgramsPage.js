import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Programs from '../components/programs/Programs'
import Footer from '../components/footer/Footer'
import Overview from '../components/programs/Overview'
import ContactForm from '../components/contact/ContactForm'
import InpatientPrograms from '../components/programs/InpatientPrograms'
import OutpatientPrograms from '../components/programs/OutpatientPrograms'

const ProgramsPage = () => {
  return (
    <>
        <Navbar /> 
        <Programs />
        <Overview />
        <InpatientPrograms />
        <OutpatientPrograms />
        <ContactForm />
        <Footer />
    </>
  )
}

export default ProgramsPage
