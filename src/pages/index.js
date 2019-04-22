import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {
  const restaurants = data.allYelpBusiness.edges;
  console.log(restaurants);
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`yelp-clone`, `application`, `gatsby`, `react`]}
      />
      <div>
        <h1>Mexican Restaurants in Philly</h1>
        {restaurants.map(({ node }) => (
          <div key={node.alias}>
            <Link to={node.alias}>
              <h3>{node.name}</h3>
            </Link>
          </div>
        ))}
      </div>
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

// import React from "react";
// import { graphql } from "gatsby";
// import Image from "gatsby-image";

// export default ({ data }) => {
//   const restaurant = data.yelpBusiness;
//   console.log(restaurant);
//   return (
//     <div>
//       <h1>{restaurant.name}</h1>
//       <Image
//         fluid={restaurant.image_url}
//         alt={restaurant.name}
//         style={{ float: "left", marginRight: "1rem", width: 150 }}
//       />
//       <p>
//         {restaurant.categories[0].title + `, ` + restaurant.categories[1].title}
//       </p>
//       <p>{restaurant.rating}</p>
//       <p>{restaurant.price}</p>
//     </div>
//   );
// };
