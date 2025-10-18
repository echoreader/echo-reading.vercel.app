import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        slug
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;


export default function PostTemplate({ data }) {
  const post = data.markdownRemark;

  if (!post) {
    return (
      <Layout>
        <p>Post not found.</p>
      </Layout>
    );
  }

  const { frontmatter, html } = post;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        pageType="post"
        slug={frontmatter.slug}
      />
      <article className="container">
        <h1>{frontmatter.title}</h1>
        <p><em>{frontmatter.date}</em></p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
