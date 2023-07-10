import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content container'>
                <div className='address bar-box1 topbar-hide'>
                    <p><span><MdLocationPin />&nbsp;</span>729 17th St, Santa Monica, Ca 90402</p>
                </div>

                <div className='email bar-box2 topbar-hide'>
                    <p><span><FiMail />&nbsp;</span> info@SantaMonicaDetox.biz</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone />&nbsp;</span> +1 (323) 443-9924</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
