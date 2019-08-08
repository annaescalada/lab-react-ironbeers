import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to='/'>
        <p>Home</p>
      </Link>
    </div>
  )
}

export default Header
