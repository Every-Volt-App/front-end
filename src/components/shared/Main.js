//Main Page for this app will have folder of sublevel components
import React, { useEffect, useState } from "react";
import Locations from "./location/Locations";
import SpecificLocation from "./location/SpecificLocation";
import { Routes, Route } from "react-router-dom";

function Main({ latitude, longitude, button }) {
  // console.log(process.env)
  console.log(`${longitude}`) //not reading longitude, came back as undefined
  console.log(`${latitude}`) //not reading longitude, came back as undefined
  const searchOptions = {
    key: process.env.REACT_APP_OPEN_CHARGER_API_KEY,
    api: "https://api.openchargemap.io/v3/poi",
    headers: {
      "Content-Type": "application/json",
    },
    verbose: "false",
    countryID: "2",
    distance: 25,
    maxresults: 5,
  };

  const [locations, setLocations] = useState(null);


  const getLocations = () => {
    const api = `${searchOptions.api}?key=${searchOptions.key}&verbose=${searchOptions.verbose}&latitude=${latitude}&longitude=${longitude}&distance=${searchOptions.distance}&countryid=${searchOptions.countryID}&maxresults=${searchOptions.maxresults}`
    // console.log(api)
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        // console.log(data, 'main')
      })
      .catch(console.error);
  };

  useEffect(() => {
    getLocations()
  }, [button])


  if (!locations) {
    return (
      <>
        <h3>Loading</h3>
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/locations"
          element={<Locations locations={locations} />}
        />
        <Route
          exact
          path="/locations/:id"
          element={<SpecificLocation locations={locations} />}
        />
      </Routes>
    </div>
  );
}

export default Main;
