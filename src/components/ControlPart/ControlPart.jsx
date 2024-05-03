import React, { useState } from 'react'
import './ControlPart.scss'
import prof from '../../../public/icons/Profile.svg'
import tick from '../../../public/icons/Tick.svg'
import shield from '../../../public/icons/Shield.svg'

export default function ControlPart() {
  const [data] = useState([
    {
      id: 1,
      icon: `${prof}`,
      alt: 'yellow two persons icon',
      partName: 'Smart search',
      content: 'The algorithm will independently select contacts according to your request'
    },
    {
      id: 2,
      icon: `${tick}`,
      alt: 'green check mark icon',
      partName: 'Instant use',
      content: 'Find out who is next to you right now and start communicating now'
    },
    {
      id: 3,
      icon: `${shield}`,
      alt: 'red check mark icon',
      partName: 'No spam',
      content: 'The necessary contacts are just a click away across the country'
    }
  ]);
  return (
    <div className='ControlPart'>
      <h2>If you need to have more control</h2>
      <div className='ControlPart__icons'>
        {
          data.map(elm => {
            return (
              <div className='icon' key={elm.id}>
                <img src={elm.icon} alt={elm.alt} />
                <h3>{elm.partName}</h3>
                <p>{elm.content}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
