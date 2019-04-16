import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import { Restaurant } from "../components/restaurant";

// <Restaurant />

const SecondPage = () => (
  <Layout>
    <SEO title="Restaurant details" />
    <p>Welcome to the Restaurant details page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
