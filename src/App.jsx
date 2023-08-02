import React from "react";
import Header from "./layout";
import SingIn from "./pages/login/sing-in/index";
import Section from "./pages/sections";
import About from "./pages/about";

import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Section />
    <About />
    {/* <SingIn /> */}
  </React.StrictMode>
);
