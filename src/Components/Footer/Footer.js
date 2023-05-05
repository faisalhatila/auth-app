import React from "react";
import classes from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import { SiAuthy } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={[
        classes["footer-wrapper"],
        "d-flex",
        "align-items-center",
        "justify-content-center",
      ].join(" ")}
    >
      <div
        className={[
          location.pathname === "/" && classes["active-nav"],
          classes["bottom-tab"],
        ].join(" ")}
      >
        <Link to="/">
          <div>
            <SiAuthy />
          </div>
          <div>Tokens</div>
        </Link>
      </div>
      <div
        className={[
          location.pathname === "/settings" && classes["active-nav"],
          classes["bottom-tab"],
        ].join(" ")}
      >
        <Link to="/settings">
          <div>
            <FiSettings />
          </div>
          <div>Settings</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
