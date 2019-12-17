module.exports = {
  siteMetadata: {
    title: `Saltwater Sun`,
    description: `Ferocious Indie 5-piece from Reading, UK.`,
    author: `chris laidler`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saltwater Sun - Official Website`,
        short_name: `saltwater sun`,
        start_url: `/`,
        background_color: `#c6c3be`,
        theme_color: `#c6c3be`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/saltwater-sun"

}
