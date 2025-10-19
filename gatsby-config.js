module.exports = {
  siteMetadata: {
    title: "Echo Reader",
    description: "Modular. Reech. Powerful.",
    siteUrl: "https://echo-reading.vercel.app", // ← wajib untuk sitemap
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
