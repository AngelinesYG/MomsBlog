/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// require('dotenv').config({
//   path: `.env.development`,
// })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'MB',
    description: 'Moms Blog was created by a mom for moms. With the idea that moms need a safe avenue to freely express themselves without being judged. By writing a blog about their experiences, moms can say whatever they need to say without fear of backlash and also find support from other moms experiencing or having experienced same or similar circumstances'
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-playground',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]

}
