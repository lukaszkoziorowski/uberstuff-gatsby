const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `uberstuff website`,
    author: `Łukasz Koziorowski`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./static/images`,
      },
    },
  ],
};
