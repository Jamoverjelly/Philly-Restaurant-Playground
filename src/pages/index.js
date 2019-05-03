import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Map from "../components/map";
import SEO from "../components/seo";

export default ({ data }) => {
  const restaurants = data.allYelpBusiness.edges;
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`yelp-clone`, `application`, `gatsby`, `react`]}
      />
      <main>
        <div>
          <h1>Mexican Restaurants in Philly</h1>
          {restaurants.map(({ node }) => (
            <div key={node.alias}>
              <Link to={`/${node.alias}`}>
                <h3>{node.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <aside
        style={{
          margin: 20,
          height: `40vh`,
          width: `50vw`
        }}
      >
        <Map restaurants={restaurants} />
      </aside>
    </Layout>
  );
};

export const query = graphql`
  {
    allYelpBusiness {
      edges {
        node {
          name
          alias
          image_url
          url
          review_count
          categories {
            title
          }
          rating
          coordinates {
            latitude
            longitude
          }
          price
          location {
            display_address
          }
          display_phone
        }
      }
    }
  }
`;
