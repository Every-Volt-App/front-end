//one 'see more' is clicked, shows one loc info. add back button
import React from "react"
import { useParams } from "react-router-dom";

function SpecificLocation(props) {

  console.log(props)

  const { id} = useParams();

  const locations = props.locations
// console.log(locations, 'loca')
 
// const thisLocation = location.find(loc => loc.ID == id)
// console.log(thisLocation, 'line 15')
//filter give you everything, find gives you one


  return (
    <li className="specCardContainer">
         {
         locations ?
      <div className="list-container">
        <span>{locations.AddressInfo.Title}</span> 
        <span className="addy"> Address: {locations.AddressInfo.AddressLine1}</span>
        <span className="addy"> {locations.AddressInfo.Town}</span>
        <span className="addy"> {locations.AddressInfo.Postcode}</span>
        <span className="addy">{locations.AddressInfo.StateOrProvince}</span>
        <span className="stretch">Usage Cost: {locations.UsageCost}</span>
        <span className="stretch">Phone: {locations.AddressInfo.ContactTelephone1}</span>
          {
            locations.StatusType ?
      <div>
        <span className="stretch">Operational: {(locations.StatusType && locations.StatusType.isOperational === "true") ? "yes" : "no"}</span>
        <span className="stretch">User Selectable: {(locations.StatusType && locations.IsUserSelectable === "true") ? "yes" : "no"}</span> 
        <span className="stretch">Status Type: {(locations.StatusType && locations.StatusType.Title) ? "yes" : "no"}</span>
      </div>
        : "Operation Status information not available"
          }
        <span className="stretch">Pay at location: {locations.UsageType.IsPayAtLocation === "false" ? "no" : "yes" }</span>
        <span className="stretch">{locations.UsageType.Title}</span>
      </div>
      : null }
    </li>
  );
}

export default SpecificLocation;

/*
Dallas - does not have StatusType. Fixed glitch to show StatusType regardless
long
-96.796989

lat
32.776665

Orlando
long
-81.379234
lat
28.538336

opt to clean up code
Operational: {operationalStatus}

*/


