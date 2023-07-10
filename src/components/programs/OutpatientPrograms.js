import React from 'react'
import './OutpatientPrograms.css'
import OutpatientIMG from '../../assets/Outpatient-Programs-IMG.jpg'
import { AiFillCheckCircle } from 'react-icons/ai';

const OutpatientPrograms = () => {
  return (
    <>
      <div className='outpatient-programs'>

            <div className='outpatient-programs-header container'>
                <h1>Outpatient Programs</h1>
            </div>

            <div className='outpatient-programs-content container'>

            <div className='outpatient-programs-left'>
            <img src={OutpatientIMG} alt="Conselling Session with a patient" loading="lazy" />
            </div>

            <div className='outpatient-programs-right'>
                <h3>PHP (Mental Health and Addiction)</h3>
                <p>
                <span><AiFillCheckCircle /> A more intense, comprehensive treatment approach than IOP, available every day of the week.</span><br/>
                <span><AiFillCheckCircle /> For those with families and responsibilities at home who seek ongoing treatment.</span><br/>
                <span><AiFillCheckCircle /> Spend your days in recovery with our team your nights at home.</span><br/>
                <span><AiFillCheckCircle /> One-on-one support available as needed.</span><br/>
                </p>

                <h3>IOP (Mental Health and Addiction)</h3>
                <p>
                <span><AiFillCheckCircle /> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.</span><br/>
                <span><AiFillCheckCircle /> Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job.</span><br/>
                </p>

                <h3>OP (Mental Health and Addiction)</h3>                
                <p>
                <span><AiFillCheckCircle /> Get continued support as needed with our outpatient programs.</span><br/>
                <span><AiFillCheckCircle /> Attend weekly group and counseling as you move back to your normal life.</span><br/>
                </p>


            </div>


            </div>
        </div>
    </>
  )
}

export default OutpatientPrograms
