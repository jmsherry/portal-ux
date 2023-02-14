import React from "react";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
}

export default Layout;
