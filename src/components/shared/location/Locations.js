//5 locations (grid of 5 cards)
import React, { useState } from 'react'

function Locations(props) {

  const [expanded, setExpanded] = useState(false) 

  return (
    <div className="list-container">
            {props.locations.map((location, idx) => 
             <div key={idx} className="location-card" >{location.AddressInfo.Title}</div>)}
    </div>
  )
             }

export default Locations