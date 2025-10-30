import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";


export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Get in touch with me for questions, feedback, or collaboration opportunities."
        pageType="contact"
      />
      <section className="container">
        <h1>Contact</h1>

  <p>If you have any questions, suggestions, or would like to get in touch, feel free to contact me using the information below.</p>

  <h2>Email</h2>
  <p>tom[.]bisnis@gmail[.]com</p>

  <h2>Feedback</h2>
  <p>I welcome constructive feedback and collaboration ideas. Please reach out if you'd like to connect.</p>
      </section>
    </Layout>
  );
}
