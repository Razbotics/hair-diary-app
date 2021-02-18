import React from "react";
import { useAppMoment } from "../../context/appContext";
import { currMonthName, currYear } from "../../libs/dateUtils";
import "./NavBar.css";

function NavBar() {
  const moment = useAppMoment();

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h2 className="blue">my</h2>
        <h2>hair</h2>
        <h2>diary</h2>
      </div>
      <div className="nav-date">
        <h2 className="bold">{currMonthName(moment)}</h2>
        <h2>{currYear(moment)}</h2>
      </div>
    </div>
  );
}

export default NavBar;
