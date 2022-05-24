//one location details - just one specific location user selected.
import React from 'react'

function LocationDetails(props) {

  return (
    <div>
        <span>{props.name}</span>
        <span>Rating: {props.rating}</span>
        <span>Cost: {props.cost}</span>
    </div>
    
  )
}

export default LocationDetails