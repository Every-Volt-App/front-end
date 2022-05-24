//Nav bar for all pages except home
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-bar">
      <Link to="#">Every Volt</Link>
      <Link to="#">Profile</Link>
    </div>
  )
}

export default Nav