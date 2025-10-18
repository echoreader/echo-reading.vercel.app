import React from "react";
import Header from "./header";
import Footer from "./footer";
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
