import React from "react";
import Header from "./layout/header";
import Section from "./components/sections";
import About from "./layout/about";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./layout/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Section />
    <About />
    <Footer />
  </React.StrictMode>
);
