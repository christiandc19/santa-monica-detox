import React from 'react'
import INSURANCESECTION from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';
import Section3 from '../section3/Section3';



const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <Section1 />
    <Section2 />
    <Section3 />
    <INSURANCESECTION />
    <ContactForm />
    </>
  )
}

export default home
