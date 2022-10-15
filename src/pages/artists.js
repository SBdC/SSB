import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const artistsPage = ({ data }) => {
  return (
    <Layout pageTitle="SSB Program">
      <p>all cool artists here</p>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            {node.frontmatter.name}

          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {folder: {eq: "artists"}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
        }
        id
       
      }
    }
  }
`


export const Head = () => <Seo title="SSB Artists" />;

export default artistsPage;
