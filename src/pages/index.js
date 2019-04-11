import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`yelp-clone`, `application`, `gatsby`, `react`]}
    />
    <div>Hello, world!</div>
    <Link to="/restaurant/">Restaurant</Link>
  </Layout>
);

export default IndexPage;
