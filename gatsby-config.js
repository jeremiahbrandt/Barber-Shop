module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `balsamiq sans`,
          `bellota text`
        ]
      }
    },    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slideshow`,
        path: `${__dirname}/src/media/slideshow`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/media/testimonials`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `arrows`,
        path: `${__dirname}/src/media/arrows`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stars`,
        path: `${__dirname}/src/media/stars`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `barbers`,
        path: `${__dirname}/src/media/barbers`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `socials`,
        path: `${__dirname}/src/media/socials`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media`
      }
    },
  ],
}
