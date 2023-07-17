import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

// sidebar
function SidebBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/form">Employee form</Link>
        </li>
        <li className="">
          <Link to="/form/table">Table view</Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebBar;
