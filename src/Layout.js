import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/add">Add</Link></li>

        </ul>

    </div>
  )
}

export default Layout