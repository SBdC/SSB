import React, { useEffect, useState } from 'react';

import Seo from "./seo";
import { graphql, Link, useStaticQuery } from "gatsby";
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';

const ArtistsList = (transitionStatus ) => {

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

const [isActive, setIsActive] = useState(true); 


// useEffect(() => {
//   gsap.from('.home-artist', {
//     autoAlpha: 1,
//     duration: 1,
//   });
// }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED 

// useEffect(() => {
//   if (transitionStatus === 'entering') {
//     gsap.from('.home-artist', {
//      y:800,
     
//     });
//   }
//   if (transitionStatus === 'exiting') {
//     gsap.to('.home-artist', {
//       y:0, 
//       color:"red"
//      });
//   }
// },[transitionStatus]); 

  return (
    <main className=" absolute bottom-0">
      <p>all cool artists here</p>
      <ul className="flex justify-between p-6">
   
        {artists.map((node, idx) => (
          <React.Fragment key={idx}>
          <li key={node.id} className={isActive === idx ? "text-red" : "p-4"}
             onClick={() => {
              // Condition for toggling the lists.
              // If current list is selected
              if (isActive === idx) {
                // change active to blank
                setIsActive();
              } else {
                // change active to current index
                setIsActive(idx);
              }
            }}>
            <Link
        //    exit={{
        //     length: 0,  
        //     state: {customstate: 'this is a exiting message'}
        //  }}
        //   entry={{
        //     length: 1,
        //     state: {customstate: 'this is a entering message'}
        //   }}
            to={`/artists${node.fields.slug}`}>
              {node.frontmatter.name}
            </Link>
          </li>
          <div className={isActive === idx ? "info active" : "info"}>
                {" "}
                Index {idx + 1}
              </div>
          </React.Fragment>
        ))}
      </ul>
      </main>
   
  );
};

export const Head = () => <Seo title="SSB Artists" />;

export default ArtistsList;
