module.exports = {
  siteMetadata: {
    title: `Woke`,
    description: `Woke est une Organisation non gouvernementale, ONG : Assistance aux réfugiés, éducations, aide au développement économique et protection des ecosystèmes.`,
    url: `https://www.woke.fr`,
    image: `/logos/wokeLogoBlack.svg`,
    author: `Adrien Lapasset`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
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
        baseUrl: `woke.ovh`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media"
        ],
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
