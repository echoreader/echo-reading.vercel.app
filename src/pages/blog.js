import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          description
          slug
          date(formatString: "MMMM D, YYYY")
        }
        id
      }
    }
  }
`;

export default function BlogPage({ data }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO
        title="Blog — EchoReader"
        description="Kumpulan artikel receh dan eksperimen modular dari EchoReader."
        pageType="blog"
      />
      <section className="container">
        <h1>Blog</h1>
        {posts.map(post => (
  <div key={post.id} className="post-card">
    <h2>
      <Link to={`/${post.frontmatter.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h2>
    <p><em>{post.frontmatter.date}</em></p>
    <p>{post.frontmatter.description}</p>
  </div>
))}

      </section>
    </Layout>
  );
}
