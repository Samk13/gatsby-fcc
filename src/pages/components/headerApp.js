import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './headerApp.module.scss'

const HeaderApp = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/">Sam Arbid</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/contact">
              Contact
            </Link>
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
