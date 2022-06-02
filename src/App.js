import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/shared/Main';
import img from './components/assets/home-img.jpg';
import "./App.css";
import React, {useState} from "react";

function App() {
  const [long, setLong] = useState(-73.990125)
  const [lat, setLat] = useState(40.739758) 
  
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
        <input onBlur={e=>setLat(e.target.value)} placeholder="Latitude"></input>
        <input onBlur={e=>setLong(e.target.value)} placeholder="Longitude"></input>
        <button onClick={e=>submissionButton(e.target.value)}>Submit</button>
      </div>
      <Main 
      long={long}
      lat={lat}
      button={submissionButton}
      />
      <Footer />
    </div>
  );
}

export default App;

//submissionButton does not have actual functionality. Code is set to run once user clicks 
//outside of long/lat boxes. User should be none the wiser