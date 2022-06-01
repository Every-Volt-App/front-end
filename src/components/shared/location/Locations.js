//5 locations (grid of 5 cards)
import React from 'react'
import LocationDetails from './LocationDetails';

function Locations({locations}) {

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