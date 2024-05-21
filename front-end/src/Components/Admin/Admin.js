import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  return (
    <div>
      <div className='adminNavbarStyle'>
        <NavLink to={"homeTemplate"}>Home Template</NavLink>
        <NavLink to={"Delete_homeTemplate"}>Home Template</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Admin
