import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from "gatsby";

const ProgramPage = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <p>{data.mdx.frontmatter.name}</p>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`


export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.name} />

export default ProgramPage