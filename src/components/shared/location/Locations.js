//5 locations (grid of 5 cards)
import React, { useState, useEffect } from 'react'
import LocationDetails from './LocationDetails';

function Locations(props) {

  const locations = props.locations

  // const [locations, setLocations] = useState([]) 

  // const url = `https://api.openchargemap.io/v3/poi/openapi?key=3d636052-e9ab-4daa-82ec-8a16bec907bb/?output=json&countrycode=US&maxresults=10`

//   useEffect(() => {
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         setLocations(data)
//         console.log(data, 'locations')
//     })
//     .catch(console.error)
// }, []);


  return (
    <div className="list-container" >
        {locations.map(location => {
          // console.log(locations, 'line 24')
          return (
            <ul className="LocDiv" key={location.ID}>
             <LocationDetails
             
              title={location.AddressInfo.Title}
              address={location.AddressInfo.AddressLine1}
              town={location.AddressInfo.Town}
              postcode={location.AddressInfo.Postcode}
              telephone={location.AddressInfo.ContactTelephone1}
              isOperational={location.StatusType.IsOpertional}
              isUserSelectable={location.StatusType.IsUserSelectable}
              statusTypeTitle={location.StatusType.Title}
              cost={location.UsuageCost}
              isPayAtLocation={location.UsageType.IsPayAtLocation}
              usageTypeTitle={location.UsageType.Title}
              id={location.ID}
             />
              </ul>
          )
        })}  
    </div>
  )
  }

export default Locations