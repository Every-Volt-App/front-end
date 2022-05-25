//one location details - just one specific location user selected.
import React, { useState, useEffect } from "react";

function LocationDetails({
    title, address, town, postcode, telephone, isOperational, isUserSelectable, 
    statusTypeTitle, cost, isPayAtLocation, usageTypeTitle}) {
    
    useEffect(() => {
    }, []);

    const [expanded, setExpanded] = useState(false)

    return (
        <li className="cardContainer" onClick={() => {setExpanded(!expanded)}}>
          <div className="cardPreview">
            <span>{title}</span> 
          </div>
          {expanded ?
            (<div className="cardFull">
            <span>{address}</span> 
            <span>{town}</span>
            <span>{postcode}</span>
            <span>{telephone}</span>
            <span>{isOperational}</span>
            <span>{isUserSelectable}</span>
            <span>{statusTypeTitle}</span>
            <span>{cost}</span>
            <span>{isPayAtLocation}</span>
            <span>{usageTypeTitle}</span>
            {/* <a href="/locations/id">see more</a> */}
          </div>
            ) 
            : null
            }
          
    
        </li>
    )
    
}



export default LocationDetails