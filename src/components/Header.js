import React from 'react'
import mavericHeader from '../assets/maveric-logo-updated.png'

function Header() {
  return (
    <div className='header'>
        <span><img className='header-img' src={mavericHeader} alt="Maveric" /> </span>
        <span className='header-text'>Maveric Bank App</span>
    </div>
  )
}

export default Header