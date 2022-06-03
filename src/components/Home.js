import React, { useState } from "react";
import Main from './shared/Main'
import img from "../components/assets/home-img.jpg";
import '../App.css'

const Home = () => {
  const [latitude, setLat] = useState(32.7767)
  const [longitude, setLong] = useState(-96.808891)

  function submissionButton() {
    console.log('clicked received')
  }
  return (
    <div>
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <div className="input">
          <input className="searchbar" type="Latitude" onBlur={e => setLat(e.target.value)} placeholder="Latitude"></input>
          <input className="searchbar" type="Longitude" onBlur={e => { setLong(e.target.value) }
          } placeholder="Longitude"></input>
      </div>
        <form action="/locations">
          <button className="get-locations" onClick={e => submissionButton(e.target.value)}>Submit</button>
        </form>
        //use e.targetvalue and pass props
      </div>
      <Main
        latitude={latitude}
        longitude={longitude}
        button={submissionButton}
      />
    </div>
  );
};

export default Home;
