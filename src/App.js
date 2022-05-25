import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/shared/Main';
import LocationDetails from './components/shared/location/LocationDetails'
import Locations from './components/shared/location/Locations'
import './App.css';

function App() {

  return (
    <div className="App">
      <h1> Hello EVoos</h1>
      <Locations />
      {/* <LocationDetails /> */}
    </div>
  );
}

export default App;
