import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/global.css"; // satu CSS untuk semua

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
