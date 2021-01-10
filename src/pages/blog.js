import React from 'react'
import { Link } from 'gatsby'
const Blog = () => {
  return (
    <div>
      <h1>this is a blog</h1>
      <p>posts should show here ... </p>
      <section>
        <Link to="/">Go Back</Link>
      </section>
    </div>
  )
}

export default Blog
