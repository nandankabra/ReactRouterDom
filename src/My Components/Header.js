import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <h1> Header </h1>
      <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <NavLink className="p-3" to="/">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="p-3" to="/Login">Login</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="p-3" to="/Regester">Register</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="p-3" to="/GetStudent/1">Get Student</NavLink>
        </Nav.Item>
      </Nav>
    </>  
  )
}
