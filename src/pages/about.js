import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="Echo Reader — Modular Architect & SEO-Driven Blog Strategist"
        description="Discover Echo Reader’s mission to build scalable, niche blog ecosystems with modular design and strategic SEO."
        pageType="about"
      />
      <section className="container">
        <h1>About Echo Reader</h1>
        <p>
Echo Reader is a modular architect and digital strategist focused on building scalable, SEO-optimized blog ecosystems.
This site serves as a strategic backlink hub, amplifying niche content in business, finance, careers, and education.
</p>

<p>
With a passion for clean UI/UX, defensive SEO, and batchable architecture
</p>
      </section>
    </Layout>
  );
}
