import React, { useEffect } from 'react';

import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo';
import ArtistsList from '../components/artistsList';
import gsap from 'gsap';

const ArtistPage = ({ data, transitionStatus  }) => {

 
  useEffect(() => {
    gsap.from('.content-artist', {
      autoAlpha: 1,
      duration: 1,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED 

  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.from('.content-artist', {
       y:800,
       
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.content-artist', {
        y:0, 
        color:"red"
       });
    }
  },[transitionStatus]); 
  


  const article = data.markdownRemark
  return (
    <Layout pageTitle={article.frontmatter.name}>
      <section className='p-12 content-artist'>
      <h2 > this artist heyhooo</h2>
      <p>{article.frontmatter.name}</p>
      </section>
     
      <ArtistsList />
    </Layout>
  )
}


export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.name} />

export default ArtistPage

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