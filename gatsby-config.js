module.exports = {
  siteMetadata: {
    title: `Naturaste`,
    description: `Site da Naturaste, 100% natural, 100% saudável, 100% saboroso!`,
    author: `Lauro e Clara`,
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Knewave", "Baloo", "Montserrat"],
        },
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#324031`,
        theme_color: `#324031`,
        display: `minimal-ui`,
        icon: `src/images/naturaste-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
