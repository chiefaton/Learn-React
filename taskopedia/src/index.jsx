import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import MainBody from "./Mainbody";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="px-4"></div>
    <MainBody />
    <Footer />
  </div>
);