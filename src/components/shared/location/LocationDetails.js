//one location details - just one specific location user selected.
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function LocationDetails(props) {

    const {title, address, town, postcode, cost, id} = props
    
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
            <span className='stretch'>{cost}</span>
            <Link to={`/locations/${id}`} key={id}>see more</Link>
          </div>
            ) 
            : null
            }
          
    
        </li>
    )
    
}



export default LocationDetails