import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  const NavLinkCss =({isActive})=>{
     return{
      color: isActive ?"#b41099":"grey",
      fontWeight: isActive ?'bold':'normal'
     }
  }
  return (
    <nav className="main_nav">
        {/* <Link to="/">Home</Link>
         <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
        <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" width={200}/>

        <NavLink style={NavLinkCss} to="/">Home</NavLink>
        {/* <NavLink style={NavLinkCss} to="/about">About</NavLink> */}
        <NavLink style={NavLinkCss} to="/product">Products</NavLink>
        <NavLink style={NavLinkCss} to="/contact">Contact</NavLink>

        <input  type="search" placeholder="Search" aria-label="Search"/>

      <button class="btn btn-outline-success" type="submit">Search</button>
    </nav>
  )
}

export default NavBar