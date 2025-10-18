const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
    createPage({
      path: `/${frontmatter.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: frontmatter.slug,
      },
    });
  });
};
