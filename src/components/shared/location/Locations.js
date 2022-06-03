//5 locations (grid of 5 cards)
import React from 'react'
import LocationDetails from './LocationDetails';
import { useState, useEffect } from 'react'
import Header from '../../Header';

function Locations() {

 
  const [locations, setLocations] = useState([]) 

  const url = `https://api.openchargemap.io/v3/poi/openapi?key=3d636052-e9ab-4daa-82ec-8a16bec907bb/?output=json&countrycode=US&maxresults=10`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setLocations(data)
    })
    .catch(console.error)
}, []);


  return (
    <div>
      <div className="header-nav">
        <Header />
      </div>
      <div className="hero">
        <div className="hero-nav">
        
        </div>
      </div>
      
      <div className="loc-flex">
        <div className="map"></div>
        <div className="list-container" >
            {locations.map(locations => {
              // console.log(locations.UsageType.Title)
              return (
                <ul className="LocDiv" key={locations.ID}>
                <LocationDetails
                
                  title={locations.AddressInfo.Title}
                  address={locations.AddressInfo.AddressLine1}
                  town={locations.AddressInfo.Town}
                  postcode={locations.AddressInfo.Postcode}
                  telephone={locations.AddressInfo.ContactTelephone1}
                  isOperational={locations.StatusType.IsOpertional}
                  isUserSelectable={locations.StatusType.IsUserSelectable}
                  statusTypeTitle={locations.StatusType.Title}
                  cost={locations.UsuageCost}
                  isPayAtLocation={locations.UsageType.IsPayAtLocation}
                  usageTypeTitle={locations.UsageType.Title}
                  id={locations.ID}
                />
                  </ul>
              )
            })}  
        </div>
    </div>

    <div className="section">
      
    </div>

    <div className="list-container" >
        {locations.map(location => {
          // console.log(location.UsageType.IsPayAtLocation, 'line 24')
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
import Nav from '../../Nav';
import Header from '../../Header';
function Locations() {

  const [locations, setLocations] = useState([]) 

  const url = `https://api.openchargemap.io/v3/poi/openapi?key=3d636052-e9ab-4daa-82ec-8a16bec907bb/?output=json&countrycode=US&maxresults=10`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setLocations(data)
    })
    .catch(console.error)
}, []);


  return (
    <div>
      <header className="hero">
        <div className="hero-nav">
          <Header />
        </div>
      </header>
      
      <div className="loc-flex">
        <div className="map"></div>
        <div className="list-container" >
            {locations.map(locations => {
              // console.log(locations.UsageType.Title)
              return (
                <ul className="LocDiv" key={locations.ID}>
                <LocationDetails
                
                  title={locations.AddressInfo.Title}
                  address={locations.AddressInfo.AddressLine1}
                  town={locations.AddressInfo.Town}
                  postcode={locations.AddressInfo.Postcode}
                  telephone={locations.AddressInfo.ContactTelephone1}
                  isOperational={locations.StatusType.IsOpertional}
                  isUserSelectable={locations.StatusType.IsUserSelectable}
                  statusTypeTitle={locations.StatusType.Title}
                  cost={locations.UsuageCost}
                  isPayAtLocation={locations.UsageType.IsPayAtLocation}
                  usageTypeTitle={locations.UsageType.Title}
                  id={locations.ID}
                />
                  </ul>
              )
            })}  
        </div>
    </div>

    <div className="section">
      
    </div>

    </div>
  )
  }

export default Locations