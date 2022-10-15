import * as React from 'react'

import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo';

const ProgramPage = ({ data }) => {

    const article = data.markdownRemark
    return (
        <Layout pageTitle={article.frontmatter.name}>
            <h2> this program heyhooo</h2>
            <p>{article.frontmatter.name}</p>
        </Layout>
    )
}


export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.name} />

export default ProgramPage

export const pageQuery = graphql`
  query programPageBySlug ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      name
    }
    id
  }
}
`