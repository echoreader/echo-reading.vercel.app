import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"; // ← ditambah: ambil siteUrl

export default function Footer() {

  // ← ditambah: ambil siteUrl dari gatsby-config.js
    const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `);
    const siteUrl = site.siteMetadata.siteUrl;

  return (
    <footer className="site-footer">
      <div className="container">
        <div class="footer-bottom">
        <p>&copy; 2025 Wealthhustle — All rights reserved.</p>
        <p>          
          <a href={`${siteUrl}/contact`}>
            Contact
          </a>
          <br />
          <a href={`${siteUrl}/disclaimer`}>
            Disclaimer
          </a>
          <br />
          <a href={`${siteUrl}/privacy-policy`}>
            Privacy Policy
          </a>
        </p>
      </div>
      </div>
    </footer>
  );
}
