import * as React from "react";
import Greeting from "../components/greeting";
import Layout from "../components/layout";
import Seo from "../components/seo";


const AboutPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <h1>about</h1>
            <p>descriptionioni</p>
            <Greeting name="Megan" />
            <Greeting name="Obinna" />
            <Greeting name="Generosa" />
        </Layout>
    );
};


export const Head = () => <Seo title="About Me" />

export default AboutPage;
