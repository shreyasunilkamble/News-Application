import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        {/* <h1>THis is my product page</h1> */}
        <nav className='child_nav'>
          <Link to="shirts">Digital Watches</Link>
          <Link to="jeans">Sport Watches</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products