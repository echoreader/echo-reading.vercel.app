import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby"; // ← ditambah: ambil siteUrl
import "../styles/global.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="site-header" role="banner">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          {/* Branding */}
          <div className="nav-brand">
            {/* <Link to="https://wealthhustle.blog/" className="brand" itemProp="url">*/}
            <Link to={`${siteUrl}/`} className="brand" itemProp="url"> {/* ← ditambah: dynamic domain */}  
              Wealthhustle
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/*<span></span>*/}
            <span></span>
            <span></span>
          </button>

          {/* Menu */}
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`} role="menubar">
            {/* <li role="none">
              <Link to="/" className="nav-link" role="menuitem">Home</Link>
            </li>*/}
            <li role="none">
              <Link to={`${siteUrl}/blog/`} className="nav-link" role="menuitem"> {/* ← ditambah: dynamic domain */}
                Blog
              </Link>
            </li>
            <li role="none">
              <Link to={`${siteUrl}/about/`} className="nav-link" role="menuitem"> {/* ← ditambah: dynamic domain */}
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
