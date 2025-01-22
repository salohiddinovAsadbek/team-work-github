import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1>Cornelia</h1>
        <div className="navbar-right">
            <div className="nav-links">
                <NavLink to="/learn">Learn</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/why">Why</NavLink>
            </div>
            <button>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
