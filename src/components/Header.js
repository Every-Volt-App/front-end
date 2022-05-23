//Header for Home Page 
  
import React from 'react'
import { Link } from 'react-router-dom'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

function Header() {
  return (
    <div className="header">
      <div className="header-links">
        <ElectricBoltIcon />
        <Link to="#" id="logo-link">Every Volt</Link>
        <Link to="#">Locations</Link>
      </div>

      <div className="header-links">
        <Link to="#" id="signup-link">Sign Up</Link>
        <Link to="#">Sign In</Link>
      </div>

    </div>
  )
}

export default Header