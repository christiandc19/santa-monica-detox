import React from 'react'
import './InpatientPrograms.css'
import inpatientIMG from '../../assets/inpatientIMG.jpg'

const InpatientPrograms = () => {
  return (
    <>
      <div className='inpatient-programs'>

          <div className='inpatient-programs-header container'>
            <h1>Inpatient Programs</h1>
          </div>

          <div className='inpatient-programs-content container'>

              <div className='inpatient-programs-left'>
                  <p><span>DETOX. </span>As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean. All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions.</p>

                  <p><span>RESIDENTIAL. </span>Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need. 24 hour supervision as needed from our staff. Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery.</p>

                  <p><span>PARTIAL HOSPITALIZATION PROGRAM. </span>The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace. Take part in treatment and therapy during the day and spend your nights in the comfort of your own home.</p>


              </div>

              <div className='inpatient-programs-right'>
              <img src={inpatientIMG} alt="Conselling Session with a patient" loading="lazy" />
              </div>


          </div>

      </div>
    </>
  )
}

export default InpatientPrograms
