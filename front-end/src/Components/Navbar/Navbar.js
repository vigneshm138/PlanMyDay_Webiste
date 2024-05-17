import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Play My day</h2>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/days"}>day</NavLink>
        <NavLink to={"/planYourDay"} style={{marginLeft:"30px"}}>Plan you day</NavLink>
      </div>
      <div>
        <NavLink to={"/login"}>login</NavLink>
        <NavLink to={"/signup"}>signup</NavLink>
      </div>
    </div>
  )
}

export default Navbar