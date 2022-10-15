import * as React from 'react'

import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo';

const artistPage = ({ data }) => {

  const article = data.markdownRemark
  return (
    <Layout pageTitle={article.frontmatter.name}>
      <h2> this artist heyhooo</h2>
      <p>{article.frontmatter.name}</p>
    </Layout>
  )
}


export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.name} />

export default artistPage

export const pageQuery = graphql`
  query artistPageBySlug ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      name
    }
    id
  }
}
`