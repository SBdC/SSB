import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

const programsPage = ({ data }) => {
  return (
    <Layout pageTitle="SSB Program">
      <p>all cool programs here</p>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>

            <Link to={`/program/${node.frontmatter.slug}`}>
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
    allMdx(filter: {frontmatter: {folder: {eq: "program"}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
          slug
        }
        id
       
      }
    }
  }
`


export const Head = () => <Seo title="SSB Artists" />;

export default programsPage;
