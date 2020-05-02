module.exports = {
  siteMetadata: {
    title: `Douglas Petla`,
    author: {
      name: `Douglas Petla`,
      summary: `Software Developer`,
    },
    description: `Douglas Petla's personal blog`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `douglaspetla`,
      github: `dpetla`,
      linkedIn: `douglaspetla`,
    },
    section: {
      about: {
        title: "About",
        subTitle: "Hello, I am Douglas",
      },
      blog: {
        title: "Blog",
        subTitle: "Thing I talk about the web",
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Douglas Petla`,
        short_name: `Douglas Petla`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0073B1`,
        display: `minimal-ui`,
        icon: `content/assets/icon-48x48.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
