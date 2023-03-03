import React from 'react'
import LandingLogo from '../Assets/landing-logo.png'

function Landing() {
  return (
    <div className='box-content'> 
    <div className='content-info'>   
        <div className="landing-judul">
        <h1>Work Order</h1>
        
        <button type="button" className="button-landing">
          Get Started
        </button>
        </div>
        <div className="img-landing">
        <img src={LandingLogo} alt="landinglogo" height="450" weight="450" />
        </div>
    </div>

    </div>
    
  )
}

export default Landing;