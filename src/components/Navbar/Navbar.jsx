import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { aboutPath, backPath, contactPath, regisPath } from '../../routes'

export default function Navbar() {
  return (
    <>
      <div className='Footer__nav'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Menu</Link>
            </li>
            <li>
              <Link to={regisPath}>Registration</Link>
            </li>
            <li>
              <Link to={aboutPath}>About the company</Link>
            </li>
            <li>
              <Link to={contactPath}>Contacts</Link>
            </li>
            <li>
              <Link to={backPath}>Feedback</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

