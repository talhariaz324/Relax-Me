import React from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  // Reciving isOpen and function for changing it
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={props.handleToggle} // This will change the value of isOpen onClick
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        {/* Using Class according to isOpen */}
        <ul className={props.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
