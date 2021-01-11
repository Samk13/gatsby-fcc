import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './headerApp.module.scss'

const HeaderApp = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header>
      <nav className={headerStyles.navContainer}>
        <h1>
          <Link to="/" activeClassName={headerStyles.activeNavItem}>
            {data.site.siteMetadata.author}
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
    </header>
  )
}

export default HeaderApp
