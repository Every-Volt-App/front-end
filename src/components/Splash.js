import React from 'react'
import img from "../components/assets/home-img.jpg";
import '../App.css'


function Splash() {
  return (
    <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        //button Let's start that will lead to /locations. 
    </div>
  )
}

export default Splash