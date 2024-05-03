import React from 'react'
import qr1 from '../../../../public/image 10.png'
import qr2 from '../../../../public/Group 8757.png'

import './SectionN3.scss'

export default function SectionN3() {

  const handleGoogleClick = () => {
    window.open('https://play.google.com/', '_blank');
  }

  const handleAppClick = () => {
    window.open('https://www.apple.com/app-store/', '_blank')
  }

  return (
    <div className='Footer__right-section'>
      <div className='Footer__right-section-qr'>
        <img src={qr1} alt="QR1" />
        <img src={qr2} alt="QR2" />
      </div>

      <div className='Footer__right-section-btns' onClick={handleAppClick}>
        <button className='Footer__right-section-btn1'>
          <i className="bi bi-apple"></i>
          <div className='btn1__text'>
            <p>Upload to</p>
            <p>App Store</p>
          </div>
        </button>

        <button className='Footer__right-section-btn2' onClick={handleGoogleClick}>
          <img src="Logo.png" alt="Logo" />
          <div className='btn2__text'>
            <p>Available in</p>
            <p>Google Play</p>
          </div>
        </button>

      </div>
    </div>
  )
}
