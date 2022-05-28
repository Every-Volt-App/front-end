//one 'see more' is clicked, shows one loc info. add back button
import React from "react"
import { useParams } from "react-router-dom";

function SpecificLocation(props) {

  console.log(props)

  const { id} = useParams();

  const locations = props.locations
console.log(locations)
//find record inside loc array where id matches var id

const thisLocation = locations.find(loc => loc.ID == id)
console.log(thisLocation.AddressInfo.title)
//may need to convert to INTs
//filter give you everything, find gives you one

// const { id:index } = useParams();
// console.log(index)

  return (
    <li className="specCardContainer">
      <div className="list-container">
        <span>{thisLocation.AddressInfo.Title}</span> 
        <span className="addy"> Address: {thisLocation.AddressInfo.AddressLine1}</span>
        <span className="addy">{thisLocation.AddressInfo.Town}</span>
        <span className="addy">{thisLocation.AddressInfo.Postcode}</span>
        <span className="stretch">{thisLocation.UsageCost}</span>
        <span className="stretch">{thisLocation.AddressInfo.ContactTelephone1}</span>
        <span className="stretch">Operational: {thisLocation.StatusType.IsOperational}</span>
        <span className="stretch">{thisLocation.StatusType.IsUserSelectable}</span>
        <span className="stretch">{thisLocation.StatusType.Title}</span>
        <span className="stretch">{thisLocation.UsageType.IsPayAtLocation}</span>
        <span className="stretch">{thisLocation.UsageType.Title}</span>
      </div>
    </li>
  );
}

export default SpecificLocation;
