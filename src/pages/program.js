import * as React from "react";

import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const programsPage = ({ data }) => {
  return (
    <Layout pageTitle="SSB Program">
      <p>all cool programs here</p>
      <ul>
        {data.allMarkdownRemark.nodes.map((node) => (
          <li key={node.id}>

            <Link to={`/program${node.fields.slug}`}>
              {node.frontmatter.name}

            </Link>

          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {folder: {eq: "program"}}}) {
    nodes {
      frontmatter {
        name
        date
        folder
      }
      fields {
          slug
        }
      id
    }
  }
  }
`

export const Head = () => <Seo title="SSB Artists" />;

export default programsPage;
