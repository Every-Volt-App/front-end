//one location details - just one specific location user selected.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LocationDetails() {
    const {ID} = useParams()

    const url = `https://api.openchargemap.io/v3/poi/openapi?key=3d636052-e9ab-4daa-82ec-8a16bec907bb/?output=json&countrycode=US&maxresults=10/${ID}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setExpanded(data)
        })
        .catch(console.error)
    }, []);

    const [expanded, setExpanded] = useState(false)
  
    return (
      <div className="cardContainer" onClick={() => {setExpanded(!expanded)}}>
        <div className="cardPreview">
          <span>{Title}</span> 
        </div>
        {expanded ?
          (<div className="cardFull">
          <span>{Title}</span> 
          <span>{Title}</span> 
          <span>{Title}</span> 
          <span>{Title}</span> 
        </div>
          ) 
          : null
          }
    
      </div>
    )
}

export default LocationDetails