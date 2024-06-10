import React, { useState } from "react";

import companyLogo from "../../assets/images/logo.jpeg";
import shoppingcart from "../../assets/icons/shopping-cart-blck.svg";
import bonusticket from "../../assets/images/ticket.png";
import loginicon from "../../assets/images/login-icon.jpg";

import Header2 from "./Components/header/navbar.jsx";
import LoginModal from "../LoginModal/modal.jsx";

import "./headerStyles.css";

const Header = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <header className="header_container">
      <div className="header_container1">
        <div className="header_left">
          <img
            className="logo"
            src={companyLogo}
            alt="Company Logo"
            width={150}
          />
        </div>

        <div className="header_center">
          <Header2 />
        </div>
      </div>

      <div className="header_right">
        <img src={shoppingcart} alt="Shoping Cart" width={50} />
        <img src={bonusticket} alt="Bonus Ticket" width={50} />
        <button onClick={openModal} className="LoginButton">
          <img src={loginicon} alt="Login Icon" width={58} />
        </button>
      </div>

      <div className="LoginModal">
        <LoginModal isVisible={isModalVisible} onClose={closeModal}>
          <h2>LOGIN</h2>
          <p>This is the modal content.</p>

          <form>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>

        </LoginModal>
      </div>
    </header>
  );
};

export default Header;