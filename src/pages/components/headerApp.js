import React from 'react'
import { Link } from 'gatsby'

const HeaderApp = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Link to="/">Go Back</Link>
      </section>
    </header>
  )
}

export default HeaderApp
