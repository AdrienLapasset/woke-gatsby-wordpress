module.exports = {
  siteMetadata: {
    title: `Woke`,
    description: `Woke`,
    author: `Adrien Lapasset`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/imgs`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/imgs/favicon.png`
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `woke.fr`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://woke.us19.list-manage.com/subscribe/post?u=d1435ae04361a6bdbdae68a23&amp;id=a1fd4291c9', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
  ],
}
