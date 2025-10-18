import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="Tentang EchoReader"
        description="Profil EchoReader — digital creator, SEO specialist, dan arsitek blog modular."
        pageType="about"
      />
      <section className="container">
        <h1>About EchoReader</h1>
        <p>
          EchoReader is a digital creator and SEO specialist focused on meaningful writing and modular blog architecture.

        </p>
        <p>
          This blog connects readers with niche blogs that cover coding experiments, API troubleshooting, and strategic storytelling.
        </p>
        <p>
          Topics covered include lifestyle, travel, and batchable logic for static web development..
        </p>
      </section>
    </Layout>
  );
}
