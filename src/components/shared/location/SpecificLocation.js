//one 'see more' is clicked, shows one loc info. add back button
import React from "react"
import { useParams } from "react-router-dom";

function SpecificLocation(props) {

  console.log(props)

  const { id} = useParams();

  const locations = props.locations
// console.log(locations)

const thisLocation = locations.find(loc => loc.ID == id)
// console.log(id)
//filter give you everything, find gives you one


  return (
    <li className="specCardContainer">
      <div className="list-container">
        <span>{thisLocation.AddressInfo.Title}</span> 
        <span className="addy"> Address: {thisLocation.AddressInfo.AddressLine1}</span>
        <span className="addy"> {thisLocation.AddressInfo.Town}</span>
        <span className="addy"> {thisLocation.AddressInfo.Postcode}</span>
        <span className="addy">{thisLocation.AddressInfo.StateOrProvince}</span>
        <span className="stretch">Usage Cost: {thisLocation.UsageCost}</span>
        <span className="stretch">Phone: {thisLocation.AddressInfo.ContactTelephone1}</span>
        <span className="stretch">Operational: {thisLocation.StatusType.IsOperational ? "yes" : "no"}</span>
        <span className="stretch">User Selectable: {thisLocation.StatusType.IsUserSelectable ? "yes" : "no"}</span>
        <span className="stretch">Status Type: {thisLocation.StatusType.Title}</span>
        <span className="stretch">Pay at location: {thisLocation.UsageType.IsPayAtLocation === "false" ? "no" : "yes" }</span>
        <span className="stretch">{thisLocation.UsageType.Title}</span>
      </div>
    </li>
  );
}

export default SpecificLocation;


