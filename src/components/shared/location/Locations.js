//5 locations (grid of 5 cards)
import React, { useEffect, useState } from 'react'

function Locations(props) {

  const [expanded, setExpanded] = useState([]) 

  const url = `https://api.openchargemap.io/v3/poi/openapi?key=3d636052-e9ab-4daa-82ec-8a16bec907bb/?output=json&countrycode=US&maxresults=10`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setExpanded(data)
        console.log(data, 'res')
    })
    .catch(console.error)
}, []);


  return (
    <div className="list-container">
        {expanded.map(location => {
          console.log(location, 'line 24')
          return (
            <li className="LocDiv">
              {location.AddressInfo.Title}
            </li>
          )
        })}
            {/* {props.locations.map((location, idx) => <div key={idx} className="location-card" >
               {location.name}
               </div>)} */}
             
    </div>
  )
  }

export default Locations