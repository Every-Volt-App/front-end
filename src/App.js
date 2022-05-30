import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/shared/Main';
import img from './components/assets/home-img.jpg';
import "./App.css";
import React from "react";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <input className="searchbar" placeholder="Enter City"></input>
      </div>
      <Main />
      <Nav />
      <Footer />

    </div>
  );
}

export default App;
