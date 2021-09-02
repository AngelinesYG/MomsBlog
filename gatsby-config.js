/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.development`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'MB',
    description: 'Moms Blog was created by a mom for moms. With the idea that moms need a safe avenue to freely express themselves without being judged. By writing a blog about their experiences, moms can say whatever they need to say without fear of backlash and also find support from other moms experiencing or having experienced same or similar circumstances'
  },
  flags: {
    
    DEV_SSR: false, 
    DEV_WEBPACK_CACHE: false,
    FAST_DEV: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    LMDB_STORE: false,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-playground',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }  
  ]
}
