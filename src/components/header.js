import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky-header">
      <div className="container header-flex">
        {/* Branding di kiri */}
        <div className="brand">
          <h1 className="site-title">
            <Link to="/">EchoReader</Link>
          </h1>
        </div>

        {/* Hamburger di kanan */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu navigasi */}
        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
