//Main Page for this app will have folder of sublevel components
import React, { useEffect, useState } from 'react'
import Locations from './location/Locations'
import SpecificLocation from './location/SpecificLocation'
import { Routes, Route } from 'react-router-dom'

function Main() {
  // console.log(process.env)

  const searchOptions = {
    key: "3d636052-e9ab-4daa-82ec-8a16bec907bb",
    limit: 5,
    api: 'https://api.openchargemap.io/v3/poi',
    headers: {
      'Content-Type': 'application/json'
    },
    countrycode: 'US',
    distance: 10,
    distanceunit: 'miles',
    lat: '47.6062',
    lon: '122.3321'
  }

  const [locations, setLocations] = useState(null)

  const getLocations = () => {
    const api = `${searchOptions.api}?key=${searchOptions.key}&countrycode=${searchOptions.countrycode}&maxresults=${searchOptions.limit}&lat=${searchOptions.lat}&lon=${searchOptions.lon}&distance=${searchOptions.distance}&distanceunit=${searchOptions.distanceunit}`
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data)
        // console.log(data)
        // console.log(`${data[0].AddressInfo.Title}`)
      })
      .catch(console.error)
  }

  useEffect(() => {
    getLocations()
  }, [])

  if (!locations) {
    return (
      <>
        <h3>Loading</h3>
      </>
    )
  }


  return (
    <div>
      {/*       <Locations
        locations={locations} /> */}
      <Routes>
        <Route exact path='/locations'
          element={<Locations
            locations={locations}
          />} />
        <Route exact path='/locations/:id'
          element={<SpecificLocation
            locations={locations}
          />} />
      </Routes>
    </div>
  )
}

export default Main