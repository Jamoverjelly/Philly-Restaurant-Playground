require("dotenv").config({
  path: `.env`
});

const fetch = require("node-fetch");

const AuthStr = `Bearer ${process.env.API_KEY}`;

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  // Helper function that processes a venue to match Gatsby's node structure
  const processBusiness = business => {
    const nodeId = createNodeId(`yelp-${business.alias}`);
    const nodeContent = JSON.stringify(business);
    const nodeData = Object.assign({}, business, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `YelpBusiness`,
        content: nodeContent,
        contentDigest: createContentDigest(business)
      }
    });

    return nodeData;
  };

  // Store the Yelp API URL
  const apiUrl = `https://api.yelp.com/v3/businesses/search?term=mexican&latitude=39.952583&longitude=-75.165222`;

  // Gatsby expects sourceNodes to return a promise
  return (
    fetch(apiUrl, {
      headers: {
        Authorization: AuthStr
      }
    })
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        data.businesses.forEach(business => {
          // Process the business data to match the structure of a Gatsby node
          const nodeData = processBusiness(business);
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData);
        });
      })
  );
};
