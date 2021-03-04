// require('dotenv').config({ path: ".env.production", })
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'DiGi Transform website',
    description: 'Transform your ideas into powerful, enterprise-grade applications, fully customised for your business',
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

    // `gatsby-transformer-sharp`,

    // `gatsby-plugin-sharp`,

    // `gatsby-image`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DiGi Transform`,
        short_name: `DiGiTF`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/logo-48x48.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
          excerpt_separator: `<!-- end -->`
      }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
