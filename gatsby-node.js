/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
  path: `.env`
});

// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const results = await graphql(`
//     {
//       allDataJson {
//         edges {
//           node {
//             businesses {
//               alias
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (results.error) {
//     console.error("Something went wrong!");
//     return;
//   }

//   results.data.allDataJson.edges.forEach(edge => {
//     const restaurant = edge.node;

//     createPage({
//       path: `/product/${restaurant.businesses.alias}/`,
//       component: require.resolve("./src/components/restaurant.js"),
//       context: {
//         slug: restaurant.businesses.alias
//       }
//     });
//   });
// };
