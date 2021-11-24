import React from "react";

import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";

import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing-page">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Landing;
