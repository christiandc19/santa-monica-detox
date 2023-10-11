import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXALCOHOL from '../components/Detox-Alcohol/DetoxAlcohol'
import DETOXALCOHOLSECTION from '../components/Detox-Alcohol/DetoxAlcoholSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DetoxAlcohol = () => {
  return (
    <>
    <Navbar /> 
    <DETOXALCOHOL />
    <DETOXALCOHOLSECTION />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxAlcohol