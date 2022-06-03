import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/shared/Main';
import img from './components/assets/home-img.jpg';
import "./App.css";
import React, {useState} from "react";

function App() {
  const [long, setLong] = useState(-96.808891)

  const [dummy, setDummy] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <input className="searchbar" placeholder="Enter City"></input>
        <input placeholder="32.779167"></input>
        <input onChange={e=>setLong(e.target.value)} placeholder="-96.808891"></input>
        <input onChange={e=>setDummy(e.target.value)} placeholder="0"></input>
      </div>
      <Main 
      long={long}
      dummy={dummy}
      />
      <Nav />
      <Footer />
    </div>
  );
}

export default App