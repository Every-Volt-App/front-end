//Main Page for this app will have folder of sublevel components
import React, { useEffect, useState } from 'react'
import Locations from './location/Locations'
import SpecificLocation from './location/SpecificLocation'
import { Routes, Route } from 'react-router-dom'

function Main() {
  // console.log(process.env)

  const searchOptions = {
    key: process.env.OPEN_CHARGER_API_KEY,
    api: 'https://api.openchargemap.io/v3/poi',
    headers: {
      'Content-Type': 'application/json'
    },
    verbose: 'false',
    latitude: '32.779167',
    longitude: '-96.808891',
    distance: 25,
    maxresults: 5
  }

  const [locations, setLocations] = useState(null)

  const getLocations = () => {
    const api = `${searchOptions.api}?key=${searchOptions.key}&verbose=${searchOptions.verbose}&latitude=${searchOptions.latitude}&longitude=${searchOptions.longitude}&distance=${searchOptions.distance}&maxresults=${searchOptions.maxresults}`
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data)
        console.log(data, 'main')
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