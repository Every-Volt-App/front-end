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