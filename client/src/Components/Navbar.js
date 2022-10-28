import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/Login">login</Link>
            <Link to="/Register">register</Link>
        </nav>
      
    </div>
  )
}

export default Navbar
