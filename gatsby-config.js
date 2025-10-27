const isProd = process.env.NODE_ENV === "production"; // ← ditambah: auto-detect environment

module.exports = {
  siteMetadata: {
    title: "Wealthhustle",
    description: "Modular. Reech. Powerful.",
    siteUrl: isProd
      ? "https://wealthhustle.blog"     // ← ditambah: domain production
      : "http://localhost:8000",        // ← ditambah: domain lokal saat dev
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-sitemap`,
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
