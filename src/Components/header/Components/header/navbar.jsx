import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

function Navbar() {
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [dropdown3Visible, setDropdown3Visible] = useState(false);
  const dropdownRefs = [useRef(null), useRef(null), useRef(null)];

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case 1:
        setDropdown1Visible(!dropdown1Visible);
        break;
      case 2:
        setDropdown2Visible(!dropdown2Visible);
        break;
      case 3:
        setDropdown3Visible(!dropdown3Visible);
        break;
      default:
        break;
    }
  };

  const closeDropdowns = () => {
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      for (let i = 0; i < dropdownRefs.length; i++) {
        if (
          dropdownRefs[i].current &&
          !dropdownRefs[i].current.contains(event.target)
        ) {
          closeDropdowns();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="dropdown" ref={dropdownRefs[0]}>
        <button className="dropbtn" onClick={() => toggleDropdown(1)}>
          Menu <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${dropdown1Visible ? "show" : ""}`}>
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
        </div>
      </div>
      <div className="dropdown" ref={dropdownRefs[1]}>
        <button className="dropbtn" onClick={() => toggleDropdown(2)}>
          Promotions <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${dropdown2Visible ? "show" : ""}`}>
          <a href="#">Promotion 1</a>
          <a href="#">Promotion 2</a>
          <a href="#">Promotion 3</a>
        </div>
      </div>
      <div className="dropdown" ref={dropdownRefs[2]}>
        <button className="dropbtn" onClick={() => toggleDropdown(3)}>
          Stores <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${dropdown3Visible ? "show" : ""}`}>
          <a href="#">Store 1</a>
          <a href="#">Store 2</a>
          <a href="#">Store 3</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;