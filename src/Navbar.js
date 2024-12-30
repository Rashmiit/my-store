import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="App-Navbar">
      <Link to="/product">Home</Link> |
      <Link to="/cart">Cart</Link> | 
      <Link to="/login">Login</Link>
    </div>
  )
}