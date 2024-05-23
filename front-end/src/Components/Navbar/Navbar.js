import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Plan. My .day</h2>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/dask"}>Daily dask</NavLink>
        <NavLink to={"/suggestion"} style={{marginLeft:"30px"}}>suggestion</NavLink>
      </div>
      <div>
        <NavLink to={"/login"}>login</NavLink>
        <NavLink to={"/signup"}>signup</NavLink>
        <NavLink to={"/profile1"} style={{marginLeft:"30px"}}>profile</NavLink>
        <NavLink to={"/admin"} style={{marginLeft:"30px"}}>admin</NavLink>
      </div>
    </div>
  )
}

export default Navbar