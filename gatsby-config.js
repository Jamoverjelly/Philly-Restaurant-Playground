require("dotenv").config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `Yelp Clone App`,
    description: `A simple clone of Yelp for searching restaurants in the Philadlephia area`,
    author: `Jamie Strausbaugh`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-yelp`
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
