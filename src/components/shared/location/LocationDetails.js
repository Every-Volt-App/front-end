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
            <span className='addy'> Address: {address}</span> 
            <span className='addy'>{town}</span>
            <span className='addy'>{postcode}</span>
            <span className='stretch'>{telephone}</span>
            <span className='stretch'>Operational: {isOperational}</span>
            <span className='stretch'>{isUserSelectable}</span>
            <span className='stretch'>{statusTypeTitle}</span>
            <span className='stretch'>{cost}</span>
            <span className='stretch'>{isPayAtLocation}</span>
            <span className='stretch'>{usageTypeTitle}</span>
            {/* <a href="/locations/id">see more</a> */}
          </div>
            ) 
            : null
            }
          
    
        </li>
    )
    
}



export default LocationDetails