import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, Link } from "gatsby";

const artistsPage = ({ data }) => {

  return (
    <Layout pageTitle="SSB Program">
      <p>all cool artists here</p>
      <ul>
        {data.allMarkdownRemark.nodes.map((node) => (

          <li key={node.id}>

            <Link to={`/artists${node.fields.slug}`}>
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
    allMarkdownRemark(filter: {frontmatter: {folder: {eq: "artists"}}}) {
    group(field: frontmatter___kuenstlergruppe) {
      kuenstlergruppe: fieldValue
      totalCount
    }  
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

export default artistsPage;
