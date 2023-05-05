import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import classes from "./style.module.css";
const Settings = () => {
  return (
    <>
      <Header />
      <div className={[classes["setting-wrapper"], "container"].join(" ")}>
        <p>
          This is <strong>Settings</strong>route
        </p>
        <Footer />
      </div>
    </>
  );
};

export default Settings;
