import React from 'react';
import ArtistsList from "../components/artistsList";
import Layout from "../components/layout";

import Seo from "../components/seo";


const artistsPage = () => {



  return (
    <Layout pageTitle="SSB Program">
    <ArtistsList />
    </Layout>
  );
};




export const Head = () => <Seo title="SSB Artists" />;

export default artistsPage;
