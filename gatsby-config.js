require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`, })

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
          name: 'services',
          path: `${__dirname}/content/services`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: 'posts',
          path: `${__dirname}/content/posts`,
      },
    },

    `gatsby-plugin-netlify-cms`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DiGi Transform`,
        short_name: `DiGiTF`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#060e39`,
        display: `standalone`,
        icon: `${__dirname}/static/DiGiTF_128.png`, // This path is relative to the root of the site.
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
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        head: true
      },
    },

    `gatsby-plugin-layout`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
