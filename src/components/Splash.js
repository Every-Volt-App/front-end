import React from 'react'
// import img from "../components/assets/home-img.jpg";
import './Splash.css'
import { Link } from 'react-router-dom'
function Splash() {
  return (
    <div className='splash-wrapper'>
      <div className='splash-container'>

      <div className='splash-header'>
        <h1>EVERY VOLT</h1>
        <h2>Go Anywhere</h2>
        <p>Every Volt connects you with all of the largest global charging networks in the world. Simply plug in, charge and go.</p>
        <Link to="/locations">
        <button className='splash-button btn-5'>Find Us</button>
      </Link>
      </div>
    </div>
      </div>
  )
}

export default Splash