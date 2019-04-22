import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default ({ data }) => {
  const restaurant = data.yelpBusiness;

  let categStr = ``;
  restaurant.categories.forEach((category, i) => {
    if (i !== restaurant.categories.length - 1) {
      categStr += `${category.title}, `;
    } else if (category.title.indexOf(categStr) === -1) {
      categStr += `${category.title} `;
    }
  });
  return (
    <Layout>
      <div key={restaurant.alias}>
        <h1>{restaurant.name}</h1>
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          style={{ marginRight: "1rem", width: 300 }}
        />
        <p>{categStr}</p>
        <p>{restaurant.rating}</p>
        <p>{restaurant.price}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($alias: String!) {
    yelpBusiness(alias: { eq: $alias }) {
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
`;

// let str = ``;
