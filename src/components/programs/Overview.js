import React from 'react'
import './Overview.css'
import overview from '../../assets/program-overview.jpg'

const Overview = () => {
  return (
    <>
      <div className='programs-overview'>

                <div className='overview-header container'>
                    <h1>Substance Abuse Treatment Above and Beyond the Norms</h1>
                    <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and re-assessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
                </div>

            <div className='programs-overview-content container'>

                <div className='programs-overview-left'>
                <img src={overview} alt="Conselling Session with a patient" loading="lazy" />
                </div>

                <div className='programs-overview-right'>
                    <p>Here at Santa Monica Detox, we firmly stand that without addressing our physical aspect, the mind cannot successfully recover. We go above and beyond the norms of mental health care, through a thorough and intentional treatment plan that is specific to every kind of individual that addresses not only the mental but also the physical inequalities in the body. <br/><br/>
                    Methods used by Santa Monica Detox are non-invasive, distinct, and successful in relieving acute symptoms that act as roadblocks to receiving the full therapy. Additionally, to get past more difficult progress barriers, these services are provided on a consistent and ongoing basis which is closely observed in coordination with our clinical team.<br/><br/>
                    The physical, mental, and spiritual imbalances have been found to be restored by its healing methods. Our design of mental health treatment is custom-fit to every individual. Compared to the programs which are commonly used, we are a firm believer that we can reach the full potential of our well-being by healing the body, mind and spirit.
                    </p>
                </div>


            </div>
      </div>
    </>
  )
}

export default Overview
