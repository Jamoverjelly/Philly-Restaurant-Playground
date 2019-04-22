const path = require(`path`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `YelpBusiness`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     });
//   }
// };

exports.createPages = async function({ actions, graphql }) {
  // Query for restaurant nodes to use in creating pages
  return await graphql(`
    {
      allYelpBusiness {
        edges {
          node {
            alias
            name
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
  `).then(result => {
    // Create pages for each restaurant
    result.data.allYelpBusiness.edges.forEach(({ node }) => {
      actions.createPage({
        // Path for this page is required
        path: node.alias,
        component: path.resolve(`./src/templates/venueDetails.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables
          alias: node.alias
        }
      });
    });
  });
};
