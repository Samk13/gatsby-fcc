import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './headerApp.module.scss'

const HeaderApp = () => {
  return (
    <header>
      <nav className={headerStyles.navContainer}>
        <h1>
          <Link to="/" activeClassName={headerStyles.activeNavItem}>
            Sam Arbid
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={headerStyles.activeNavItem}>
              about
            </Link>
          </li>
        </ul>
      </nav>
      <section>
        <Link to="/" activeClassName={headerStyles.activeClassName}>
          Go Back
        </Link>
      </section>
    </header>
  )
}

export default HeaderApp
