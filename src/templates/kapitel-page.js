
import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const KapitelTags = ({ pageContext, data }) => {
  const { tag } = pageContext
  console.log(pageContext)
  const { edges, totalCount } = data.allMarkdownRemark

  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader} heyhooo</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { name } = node.frontmatter
          const { folder } = node.frontmatter

          return (
            <li key={slug}>
              <Link to={`/${folder}${slug}`}>{name}</Link>
            </li>
          )
        })}
      </ul>

      <Link to="/kapitel">All kapitel</Link>
    </Layout>
  )
}

KapitelTags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              name: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default KapitelTags

export const pageQuery = graphql`
  query($tag: [String]) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {kapitel: {in: $tag}}}
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            name
            kapitel
            folder
          }
        }
      }
    }
  }
`