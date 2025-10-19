import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="Echo Reader — Strategic Backlink Hub for Business & Education."
        description="Echo Reader connects niche blogs in finance and education, boosting visibility for Investify Guide and Hustle Crafted."
        pageType="home"
      />
      <section className="container">
        <h1>Welcome to Echo Reader</h1>
        <p>
Echo Reader is a strategic backlink hub connecting niche blogs in business, finance, careers, and education.
</p>
      </section>
    </Layout>
  );
}
