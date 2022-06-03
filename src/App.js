import React from "react";
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/user/Login';
import Signup from './components/user/Signup';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//submissionButton does not have actual functionality. Code is set to run once user clicks 
//outside of long/lat boxes. User should be none the wiser
