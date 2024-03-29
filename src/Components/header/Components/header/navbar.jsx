import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (e) => {
    if (!e.target.matches(".dropbtn")) {
      setDropdownVisible(false);
    }
  };

  return (
    <div className="navbar" onClick={closeDropdown}>
      <a href="#home">Home1</a>
      <a href="#news">News2</a>

      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          Stores <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${dropdownVisible ? "show" : ""}`}>
          <a href="#">Store 1</a>
          <a href="#">Store 2</a>
          <a href="#">Store 3</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          Stores <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${dropdownVisible ? "show" : ""}`}>
          <a href="#">Store 1</a>
          <a href="#">Store 2</a>
          <a href="#">Store 3</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
