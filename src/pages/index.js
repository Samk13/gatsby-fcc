import React from 'react'
import { Link } from 'gatsby'

const Home = () => {
  return (
    <div>
      <section>
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
      </section>
      <h1>Hello.</h1>
      <h2>My name is Sam I am testing Gatsby</h2>
    </div>
  )
}

export default Home
