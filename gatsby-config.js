module.exports = {
  siteMetadata: {
    title: 'MDB React Starter',
    description: 'MDB React starter for material design landing page',
    siteUrl: 'https://digitransform.com.au',
    author: 'Linda Chen',
  },
  plugins: [
    `gatsby-plugin-sass`,
    
    `gatsby-plugin-react-helmet`,
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: 'files',
          path: `${__dirname}/src/markdown`,
      },
    },

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DiGi Transform`,
        short_name: `DiGiTF`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
          excerpt_separator: `<!-- end -->`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
