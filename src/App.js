import React from "react";
import "./App.css";

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
      <Header />
      <User />
      <Main />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App