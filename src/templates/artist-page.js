import React, { useState } from 'react';

import { graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo';
import ArtistsList from '../components/artistsList';

const ArtistPage = ({ data, transitionStatus  }) => {

  const [currentArtist, setCurrentArtist] = useState();  


  const article = data.markdownRemark
  return (
    <Layout pageTitle={article.frontmatter.name}>
      <h2> this artist heyhooo</h2>
      <p>{article.frontmatter.name}</p>
      <ArtistsList currentArtist={currentArtist} setCurrentArtist={setCurrentArtist}/>
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