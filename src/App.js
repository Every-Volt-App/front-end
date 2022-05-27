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

function App() {
  const locations = [
    {
      name: "Wawa",
      rating: 4,
      cost: 0,

    },
    {
      name: "Charging Point",
      rating: 5,
      cost: 0
    },
    {
      name: "EVgo",
      rating: 2,
      cost: 0
    },
    {
      name: "Tesla Destination Charger",
      rating: 5,
      cost: 5
    },
    {
      name: "SemaConnect",
      rating: 3,
      cost: 5
    }
  ]

 
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

  
    </div>
  );
}

export default App;
