import React from 'react'

import Navbar from '../components/navbar/Navbar'
import AddictionTreatment from '../components/addictionTreatment/AddictionTreatment'
import AddictionTreatmentSection from '../components/addictionTreatment/AddictionTreatmentSection'
import InsuranceSection from '../components/insurance/InsuranceSection';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/footer/Footer'

const DetoxPage = () => {
    return (
        <>
           <Navbar /> 
           <AddictionTreatment />
           <AddictionTreatmentSection />
           <InsuranceSection />
           <ContactForm />
           <Footer />
        </>
    )
}

export default DetoxPage
