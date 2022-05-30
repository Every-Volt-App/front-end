import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/shared/Main';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/user/LogInForm';
import { Routes, Route } from 'react-router-dom'
import img from './components/assets/home-img.jpg'
import './App.css';
import Locations from './components/shared/location/Locations';
import "./App.css";
import { useEffect } from "react";
import React, { useState } from "react";


function App() {
  //reference to backend url
  // const URL = "http://localhost:4000"
  const URL = "https://every-volt-back.herokuapp.com"

  const [data, setData] = useState()

  const getLink = () => {
    fetch(`${URL}/locations`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      },
      )
      .catch(console.error)
  }

  useEffect(() => getLink(), [])
  // console.log(data)

  if (!data) {
    return <h2>Loading</h2>
  }


  return (
    <div className="App">
      <Header />

      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <input className="searchbar" placeholder="Enter City"></input>
        {/* <Routes> */}
          {/* <Route exact path="/" element={<App />} />
          <Route exact path="/locations" element={<App />} /> */}
          {/* <Route exact path="/sign-up" element={<SignUpForm />} />
          <Route exact path="/log-in" element={<LogInForm />} />
        </Routes> */}
      </div>
   
      {/* <Locations locations={locations}/> */}
 
      <Main />
      <Nav />
      <Footer />

    </div>
  );
}

export default App;
