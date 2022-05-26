import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/shared/Main';
import Footer from './components/Footer';
import './App.css';
import { useEffect } from 'react';
import React, { useState } from 'react';

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
  console.log(data)

  if (!data) {
    return <h2>Loading</h2>
  }

  return (
    <div className="App">
      <Header />
      <Main />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
