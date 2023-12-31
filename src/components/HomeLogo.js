import React from 'react'
import '../styles/HomeLogo.css'
import HomeLogoImg from '../assets/imgs/home_logo_temp.png'

function HomeLogo() {
  return (
    <div className='homeLogo'>
      <img className='homeLogoImg' src={HomeLogoImg} alt='Home Logo'></img>
    </div>
  )
}

export default HomeLogo