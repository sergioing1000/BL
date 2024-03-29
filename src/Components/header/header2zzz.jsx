import React, { useState } from 'react';
import "./header2.css";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (e) => {
    if (!e.target.matches('.dropbtn')) {
      setDropdownVisible(false);
    }
  };

  return (
    <div className="navbar" onClick={closeDropdown}>
      <a href="#home">Home1</a>
      <a href="#news">News2</a>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          Dropdown3 <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${dropdownVisible ? "show" : ""}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
