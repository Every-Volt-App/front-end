//one 'see more' is clicked, shows one loc info. add back button
import React from "react"
import { useParams } from "react-router-dom";

function SpecificLocation(props) {

  console.log(props)

  const { id} = useParams();

  const locations = props.locations
// console.log(locations, 'loca')

const thisLocation = locations.find(loc => loc.ID == id)
console.log(thisLocation, 'line 15')
//filter give you everything, find gives you one


  return (
    <li className="specCardContainer">
         {
         thisLocation ?
      <div className="list-container">
        <span>{thisLocation.AddressInfo.Title}</span> 
        <span className="addy"> Address: {thisLocation.AddressInfo.AddressLine1}</span>
        <span className="addy"> {thisLocation.AddressInfo.Town}</span>
        <span className="addy"> {thisLocation.AddressInfo.Postcode}</span>
        <span className="addy">{thisLocation.AddressInfo.StateOrProvince}</span>
        <span className="stretch">Usage Cost: {thisLocation.UsageCost}</span>
        <span className="stretch">Phone: {thisLocation.AddressInfo.ContactTelephone1}</span>
          {
            thisLocation.StatusType ?
      <div>
        <span className="stretch">Operational: {(thisLocation.StatusType && thisLocation.StatusType.isOperational === "true") ? "yes" : "no"}</span>
        <span className="stretch">User Selectable: {(thisLocation.StatusType && thisLocation.IsUserSelectable === "true") ? "yes" : "no"}</span> 
        <span className="stretch">Status Type: {(thisLocation.StatusType && thisLocation.StatusType.Title) ? "yes" : "no"}</span>
      </div>
        : "Operation Status information not available"
          }
        <span className="stretch">Pay at location: {thisLocation.UsageType.IsPayAtLocation === "false" ? "no" : "yes" }</span>
        <span className="stretch">{thisLocation.UsageType.Title}</span>
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


