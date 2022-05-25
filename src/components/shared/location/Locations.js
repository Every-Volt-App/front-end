//5 locations (grid of 5 cards)
import React, { useEffect, useState } from 'react'
import LocationDetails from './LocationDetails';

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
             />
             
            </ul>
          )
        })}  
    </div>
  )
  }

export default Locations

 //locDet comp 
             //set link to locationdetail