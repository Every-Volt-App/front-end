import React from 'react'
import img from "../components/assets/home-img.jpg";
import './Splash.css'
import { Link } from 'react-router-dom'
function Splash() {
  return (
    <div className="home-image">
        <img src={img} alt="city"></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <Link to = "/locations">
          <button className='splash'>
            Veevoo
          </button>
        </Link>
    </div>
  )
}

export default Splash