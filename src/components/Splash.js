import React from 'react'
// import img from "../components/assets/home-img.jpg";
import './Splash.css'
import { Link } from 'react-router-dom'
function Splash() {
  return (
    <div className='splash-wrapper'>
      <div className='splash-container'>

      <div className='splash-header'>
        <h1 >Find the nearest EV charging stations</h1>
        <Link to="/locations">
        <button className='splash-button'>Start</button>
      </Link>
      </div>
    </div>
      </div>
  )
}

export default Splash