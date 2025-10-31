import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About WealthHustle — Empowering Financial Growth & Career Mastery"
        description="WealthHustle is built for ambitious minds seeking financial clarity and career momentum. We combine smart investing, budgeting strategies."
        pageType="about"
      />
      <section className="container">
        <h1>About WealthHustle</h1>
        <p>WealthHustle is built for ambitious minds seeking financial clarity and career momentum. We blend smart investing, budgeting strategies, productivity tools, and lifelong learning to help you grow wealth and craft your hustle with purpose.</p>
        <p>This blog is curated by Echo Reader — a modular content studio exploring niche storytelling across independent domains. 
          <br/>
          <a href="https://echoreader.blog" rel="nofollow noopener" target="_blank">Echo Reader</a>.
        </p>
      </section>
    </Layout>
  );
}
