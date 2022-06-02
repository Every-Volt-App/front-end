import React from "react";
<<<<<<< HEAD
import "./App.css";
=======
import { Routes, Route } from 'react-router-dom'
import Locations from './components/shared/location/Locations';
>>>>>>> 99e9ce6 (locations.js css)

//Components
import Header from "./components/Header";
import User from "./components/user/User";
import Main from "./components/shared/Main";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <User />
      <Main />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
=======
      {/* <Header />
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <input className="searchbar" placeholder="Enter City"></input>
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

>>>>>>> 99e9ce6 (locations.js css)
    </div>
  );
}

export default App