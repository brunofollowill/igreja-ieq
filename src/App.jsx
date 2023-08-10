import React from "react";
import Header from "./layout";
import SingIn from "./pages/login/sing-in/index";
import Section from "./pages/sections";
import About from "./pages/about";

import ReactDOM from "react-dom/client";
import "./index.css";
import Timeline from "./components/timeline";
import Footer from "./components/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Section />
    <About />
   
    <Footer />
    {/* <SingIn /> */}
  </React.StrictMode>
);
