import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/shared/Main';
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
      <h1> Hello EVoos</h1>
      <Locations locations={locations}/>
    </div>
  );
}

export default App;
