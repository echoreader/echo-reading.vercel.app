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
        title="WealthHustle Articles — Finance Tips, Career Advice & Productivity Insights for Driven Professionals"
        description="Browse WealthHustle curated articles on smart investing, career growth, budgeting, and productivity. Whether you're climbing the corporate ladder or building your own path, our insights help you hustle smarter and grow stronger."
        pageType="blog"
      />
      <section className="container">
        <h1>Blog</h1>
        {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2>
            <Link to={`https://wealthhustle.blog/${post.frontmatter.slug}`}>
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
