import React, { useState, useEffect } from 'react'
import LocationDetails from './LocationDetails';
import '../../App.css'
import Header from '../Header';

function Locations() {


  const [latitude, setLat] = useState(32.7767)
  const [longitude, setLong] = useState(-96.808891)


  const [locations, setLocations] = useState(null);

  function submissionButton() {
    console.log(longitude, latitude, 'clicked received')
  }

  const searchOptions = {
    key: process.env.REACT_APP_OPEN_CHARGER_API_KEY,
    api: "https://api.openchargemap.io/v3/poi",
    headers: {
      "Content-Type": "application/json",
    },
    verbose: "false",
    countryID: "2",
    distance: 25,
    maxresults: 5
  };

  const getLocations = () => {
    const api = `${searchOptions.api}?key=${searchOptions.key}&verbose=${searchOptions.verbose}&latitude=${latitude}&longitude=${longitude}&distance=${searchOptions.distance}&countryid=${searchOptions.countryID}&maxresults=${searchOptions.maxresults}`
    // console.log(api)
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        console.log(data, 'main')
      })
      .catch(console.error);
  };

  useEffect(() => {
    getLocations()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    getLocations()

    console.log(longitude, latitude)
  }

  if (!locations) {
    return (
      <>
        <h3>Loading</h3>
      </>
    );
  }

  return (
    <div>
     
      <div className="hero">

      </div>
      <div className="lat-form">
      <form onSubmit={handleSubmit} className="form">
        <input className="searchbar" type="integer" onBlur={e => setLat(e.target.value)} placeholder="Latitude"></input>
        <input className="searchbar" type="integer"onBlur={e => setLong(e.target.value)} placeholder="Longitude"></input>
        <button className="coor" onClick={e => submissionButton(e.target.value)}>Submit</button>
      </form>
      </div>
      <div className="loc-flex">
        <div className="map"></div>
        <div className="list-container" >

          {locations.map(location => {
            return (
              <ul className="LocDiv" key={location.ID}>
                <LocationDetails
                  title={location.AddressInfo.Title}
                  address={location.AddressInfo.AddressLine1}
                  town={location.AddressInfo.Town}
                  postcode={location.AddressInfo.Postcode}
                  state={location.AddressInfo.StateOrProvince}
                  telephone={location.AddressInfo.ContactTelephone1}
                  cost={location.UsageCost}
                  id={location.ID}
                  lat={location.AddressInfo.Latitude}
                  long={location.AddressInfo.Longitude}
                />
              </ul>
            )
          })}
        </div>
      </div>
   
   
    </div>
  )
}

export default Locations