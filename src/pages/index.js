import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="EchoReader — Modular. Receh. Powerful."
        description="EchoReader adalah blog modular yang membahas eksperimen, receh coding, dan batchable logic."
        pageType="home"
      />
      <section className="container">
        <h1>Welcome to EchoReader</h1>
        <p>Modular. Receh. Powerful.</p>
        <p>This blog covers coding experiments, API troubleshooting, and batchable architectures.</p>
      </section>
    </Layout>
  );
}
