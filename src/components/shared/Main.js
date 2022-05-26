//Main Page for this app will have folder of sublevel components
import React, { useEffect, useState } from 'react'
import Locations from './location/Locations'
import { Routes, Route } from 'react-router-dom'
const URL = "https://every-volt-back.herokuapp.com/"


function Main() {
  const [locations, setLocations] = useState(null)

  //const querySearch

  const getLocation = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setLocations(data)
        console.log(data)
      })
      .catch(console.error)
  }

  const createLocation = async (location) => {
    await fetch(URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
    })
    getLocation()
  }

  const updateLocation = async (location, id) => {
    await fetch(URL + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(location)
    })
    getLocation()
  }

  const deleteLocation = async (id) => {
    await fetch(URL + id, {
      method: 'delete'
    })
    getLocation()
  }

  useEffect(() => getLocation(), [])
  
  if (!locations) {
    return <h3>Loading</h3>
  }
  console.log(`The first location is ${locations[0].title}`)

  return (
    <main>
      <Routes>
        <Route exact path='/locations'
          element={<Locations
            locations={locations}
            createLocation= {createLocation}
          />} />
        <Route exact path='/locations/:id'
          element={<Locations
            locations={locations}
            updateLocation={updateLocation} 
            deleteLocation={deleteLocation}
          />}
            />
      </Routes>
    </main>
  )
}

export default Main