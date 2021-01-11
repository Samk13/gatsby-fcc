import React from 'react'
import { Layout } from './components'
import { useStaticQuery, graphql } from 'gatsby'
const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>this is a blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li key={i}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
