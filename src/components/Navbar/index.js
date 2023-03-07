import React from 'react';
import {NavLink} from "react-router-dom"
import "./style.css"

const Navbar = () => {
  return (
    <div className="Navbar">
        <h1>Howard Lee</h1>
        <NavLink to="/" activeClassName="active">About</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact Me</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
    </div>
  )
}

export default Navbar