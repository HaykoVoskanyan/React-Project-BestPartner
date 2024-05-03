import React from 'react'
import './FindPerfect.scss'
import content from '../../../public/Contents.png'

export default function FindPerfect() {
  return (
    <div className='FindPerfect'>
      <div className='FindPerfect__left'>
        <img src={content} alt="FindPerfect" />
      </div>
      <div className="FindPerfect__right">
        <h2>Find your perfect match!</h2>
        <p>
          On NextLove®, there are thousands of single parents like you close to you that you can befriend, flirt with or start dating. 
          And YOU are in control and set the limits. If you are not ready for a new relationship yet, you can find new friends.
        </p>
        <p>
          If you are now ready for your NextLove®, you will be able to find your dream match among our 
          thousands of single parents near you who are in the same life phase as you. 
        </p>
      </div>
    </div>
  )
}
