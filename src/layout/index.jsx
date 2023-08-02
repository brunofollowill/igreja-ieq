import React from "react";
import Menu from "../components/nav/index";
import logo from "../../public/img/logo-01.png";
import "../layout/header.css";

export default function header() {
  return (
    <div className="container-header">
      <header className="box-header">
        <img src={logo} alt="logo" />
        <Menu />
      </header>
    </div>
  );
}
