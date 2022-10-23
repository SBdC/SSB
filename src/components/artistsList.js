import React from 'react';

import Seo from "./seo";
import { graphql, Link, useStaticQuery } from "gatsby";
import TransitionLink from 'gatsby-plugin-transition-link';

const ArtistsList = () => {

  const data = useStaticQuery(graphql`
    query artistQuery {
      allMarkdownRemark(
        filter: { frontmatter: { folder: { eq: "artists" } } }
      ) {
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
  `);


const artists = data.allMarkdownRemark.nodes


  return (
    <main>
      <p>all cool artists here</p>
      <ul>
        {artists.map((node) => (
          <li key={node.id}>
            <TransitionLink
            exit={{
              length: 1,
            }}
            entry={{length: 1}} 
            to={`/artists${node.fields.slug}`}>
              {node.frontmatter.name}
            </TransitionLink>
          </li>
        ))}
      </ul>
      </main>
   
  );
};

export const Head = () => <Seo title="SSB Artists" />;

export default ArtistsList;
