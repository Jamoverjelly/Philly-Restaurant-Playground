// import React from "react";
// import { graphql } from "gatsby";
// import Image from "gatsby-image";

// export const query = graphql`
//   query {
//     allDataJson {
//       edges {
//         node {
//           businesses {
//             name
//             price
//             rating
//             categories {
//               title
//             }
//             image_url
//           }
//         }
//       }
//     }
//   }
// `;

// const Restaurant = ({ data }) => {
//   const restaurant = data.allDataJson;

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

// export default Restaurant;
