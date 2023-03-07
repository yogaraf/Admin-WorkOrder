import React from 'react'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className='landingpage'>
        <div className='tulisanlanding'>
            <h1>Work Order</h1>
            <h2>The Best Service Therere is!</h2>
            <p>Offers technological device repair services. Makes you feel most comfortable at work.</p>

            <Link to="/orderan">
                <button type="button" className="button-landing">
                   Orderan
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Landing;