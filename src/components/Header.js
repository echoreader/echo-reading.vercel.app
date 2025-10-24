import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          {/* Branding */}
          <div className="nav-brand">
            <Link to="https://wealthhustle.blog/" className="brand" itemProp="url">
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
              <Link to="https://wealthhustle.blog/blog" className="nav-link" role="menuitem">Blog</Link>
            </li>
            <li role="none">
              <Link to="https://wealthhustle.blog/about" className="nav-link" role="menuitem">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
