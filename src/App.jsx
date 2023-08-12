import React from "react";
import Section from "./components/sections";
import Header from "./layout/header";
import About from "./layout/about";
import Footer from "./layout/footer";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Section />
    <About />
    <Footer />
  </React.StrictMode>
);
