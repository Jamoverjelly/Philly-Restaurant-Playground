require("dotenv").config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `Yelp Clone App`,
    description: `A simple clone of Yelp for viewing Mexican restaurants in the Philadlephia area`,
    author: `Jamie Strausbaugh`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-yelp`
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["MAPS_API_KEY"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `phillyMex`,
        path: `${__dirname}/src/data/`
      }
    }
  ]
};
