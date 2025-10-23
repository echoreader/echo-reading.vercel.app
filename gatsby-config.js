module.exports = {
  siteMetadata: {
    title: "Wealthhustle",
    description: "Modular. Reech. Powerful.",
    siteUrl: "https://wealthhustle.blog", // ← wajib untuk sitemap
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
//echo-reading.vercel.app > wealthhustle.blog