
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <h1>Welcome</h1>

      <StaticImage
        alt="pattern sbdc"
        src="../images/SBdC-pattern(4).png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage