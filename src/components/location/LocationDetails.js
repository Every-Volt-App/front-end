import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import Header from "../../Header";
import StarRateIcon from '@mui/icons-material/StarRate';
// import Paper from '@mui/material/Paper';
import StarHalf from "@mui/icons-material/StarHalf";
import SpecificLocation from "./SpecificLocation";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function LocationDetails(props) {
  const { title, address, town, postcode, cost, state, telephone, id } = props
  // console.log(props)
  useEffect(() => {
  }, []);
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      {/* <div className=".header-nav">
            <Header />
           
        </div> */}
      {/* <div className="location-hero"> */}
      {/* <h1 className="title">Location</h1> */}
      {/* </div> */}
      {/*       <section className="location-info">
        <div className="address-div">
          <h1>Address</h1>
          <h1>Phone Number</h1>
        </div>
        <div className="cost-div">
          <h1>Cost</h1>
          <h1>Availability</h1>
        </div>
      </section> */}
      {/*         <section className="rating-div">
          <div className="rating">
            <StarRateIcon sx={{ fontSize: 50}}/>
            <StarRateIcon sx={{ fontSize: 50}}/>
            <StarRateIcon sx={{ fontSize: 50}}/>
            <StarHalf sx={{ fontSize: 50}}/>
          </div>
        */}
      {/*           <div className="boxes">
            <div className="box">
              <h2></h2>
            </div>
            <div className="box">
            </div>
            <div className="box">
            </div>
          </div> */}
      {/* </section>  */}

      <li className="cardContainer" onClick={() => { setExpanded(!expanded) }}>
        <div className="cardPreview">
          <span>{title}</span>
        </div>
        {expanded ?
          (<div className="cardFull">
            <span className='addy'> Address: {address}</span>
            <br />
            <span className='addy'>{town}</span>
            <br />
            <span className='addy'> {state}</span>
            <span className='addy'>{postcode}</span>
            <span className='stretch'>phone: {telephone ? telephone : "n/a"}</span>
            <span className='stretch'>cost: {cost ? cost : "n/a"}</span>
          </div>
          )
          : null
        }
      </li>
    </div>
  )
}
export default LocationDetails