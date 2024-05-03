import React from 'react'
import './SectionN1.scss'
import imge1 from '../../../../public/image1.png'

export default function SectionN1() {
  return (
      <div className="Footer__left-section">
        <img src={imge1} alt="Logo" />
        <p><span>NextLove® </span>in social networks</p>
        <div className="Footer__left-section-icon">
          <a href="https://www.whatsapp.com/" target='_blank'> <i className="bi bi-whatsapp"></i></a>
          <a href="https://www.instagram.com/" target='_blank'> <i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-telephone"></i></a>
        </div>

    </div>
  )
}

