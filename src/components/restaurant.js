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

// export const query = graphql`
//   query {
//     yelpBusiness {
//       name
//       image_url
//       url
//       review_count
//       categories {
//         title
//       }
//       rating
//       coordinates {
//         latitude
//         longitude
//       }
//       price
//       location {
//         display_address
//       }
//       display_phone
//     }
//   }
// `;
