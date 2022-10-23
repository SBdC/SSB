import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { graphql } from "gatsby"
import Layout from "../components/layout"

const TagsKapitelPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <Layout>

        <div>
            <h1>kapitel</h1>
            <ul>
                {group.map(tag => (
                    <li key={tag.fieldValue}>
                        <AniLink  paintDrip to={`/kapitel/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </AniLink>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
)

TagsKapitelPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default TagsKapitelPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___kapitel) {
        fieldValue
        totalCount
      }
    }
  }
`