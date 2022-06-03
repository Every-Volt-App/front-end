import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Locations from './components/shared/location/Locations';

//Components
import Header from "./components/Header";
import User from "./components/user/User";
import Main from "./components/shared/Main";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LocationDetails from "./components/shared/location/LocationDetails";
import Profile from "./components/user/Profile";



  return (
    <div className="App">
      {/* <Header />
      <User />
      <Main />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer /> */}
      {/* <Header />
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <input className="searchbar" placeholder="Enter City"></input>
        <input onBlur={e=>setLat(e.target.value)} placeholder="Latitude"></input>
        <input onBlur={e=>setLong(e.target.value)} placeholder="Longitude"></input>
        <button onClick={e=>submissionButton(e.target.value)}>Submit</button>
      </div>

      <div className="app-main">
        <Routes>
          <Route exact path="/user/login" element={<Login />} />
        </Routes>
      </div>
      <Main />
      <Nav />
      <Footer /> */}
      <Locations />
      {/* <Profile /> */}
      {/* <LocationDetails /> */}
    </div>
  );
}


export default App;

//submissionButton does not have actual functionality. Code is set to run once user clicks 

