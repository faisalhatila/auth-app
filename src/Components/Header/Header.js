import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import classes from "./style.module.css";
const Header = ({ addToken }) => {
  return (
    <div
      className={[
        classes["header-wrapper"],
        "d-flex",
        "justify-content-between",
        "py-3",
        "container",
      ].join(" ")}
      data-testid="headers"
    >
      <div>{!!addToken ? <Link to="/">Back</Link> : <p>Edit</p>}</div>
      <div className={classes["header-title"]}>Tokens</div>
      {!addToken && (
        <div>
          <Link to="/add-token">
            <IoMdAddCircleOutline size={30} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
