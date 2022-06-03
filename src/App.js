import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from './components/Nav';
import Main from './components/shared/Main';
import img from './components/assets/home-img.jpg';
import "./App.css";
import React, {useState} from "react";

function App() {
  const [long, setLong] = useState(-73.990125)
  const [lat, setLat] = useState(40.739758)

  const [town, setTown] = useState('Columbus')
  const [state, setState] = useState('Ohio')
  
  function submissionButton(){
      console.log('clicked received')
    }
  

  // const [dummy, setDummy] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">Find the nearest <br /> EV charging station</h1>
        <input className="searchbar" placeholder="Enter City"></input>
        {/* <input onChange={e=>setLong(e.target.value)} placeholder="Longitude"></input>
        <input onChange={e=>setLat(e.target.value)} placeholder="Latitude"></input> */}
        <input onChange={e=>setTown(e.target.value)} placeholder="Town"></input>
        <input onChange={e=>setState(e.target.value)} placeholder="State"></input>
        <button onClick={e=>submissionButton(e.target.value)}>Click</button>
        {/* <input type="button" onClick={e=>setDummy(e.target.value)} value="submit"></input> */}
      </div>
      <Main 
      town={town}
      state={state}
      // long={long}
      // lat={lat}
      dummy={submissionButton}
      />
      {/* <Nav /> */}
      <Footer />
    </div>
  );
}

export default App