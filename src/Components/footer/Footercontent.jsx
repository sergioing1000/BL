import React from "react";

import "./fcontent.css";

import companyLogo from "../../assets/images/logo-copia.svg";

import linkedin from "../../assets/icons/social/linkedin-wh.svg";
import instagram from "../../assets/icons/social/instagram-wh.svg";
import facebook from "../../assets/icons/social/facebook-wh.svg";
import whatsapp from "../../assets/icons/social/whatsapp-wh.svg";
import twitter from "../../assets/icons/social/x-wh.svg";
import youtube from "../../assets/icons/social/youtube-sq-wh.svg";

import address from "../../assets/icons/contact/address.svg";
import phone from "../../assets/icons/contact/phone.svg";
import work from "../../assets/icons/contact/work.svg";
import email from "../../assets/icons/contact/email.svg";

import appstore from "../../assets/images/appstore.jpg";
import googleplay from "../../assets/images/googleplay.jpg";  



const Fcontent = () => {
  return (
    <div className="Fcontent">
      <div className="Fcontent_up">
        <div className="Fcontent_up_left">
          <div className="Fcontent_up_left_1">
            <p>
              <img
                className="FcontentLogo"
                src={companyLogo}
                alt="Logo"
                width={120}
              />
            </p>
            <p className="FcontentName">Space Burguer</p>
            <p className="FcontentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt!
            </p>
          </div>
          <div className="Fcontent_up_left_2">
            <div className="FcontentName">Contact Us</div>
            <div className="Fcontent_up_left_address">
              <img src={address} alt="address" width={40} />
              <span className="Fcontent_up_left_address_text">
                135 Mollie Villages, East Tyishaberg, GA 42126-2324
              </span>
            </div>
            <div className="Fcontent_up_left_phone">
              <img src={phone} alt="phone" width={30} />
              <span className="Fcontent_up_left_address_text">
                +1 845 542 1689
              </span>
            </div>
            <div className="Fcontent_up_left_carrers">
              <img src={work} alt="work" width={30} />
              <span className="Fcontent_up_left_address_text">Careers</span>
            </div>
            <div className="Fcontent_up_left_email">
              <img src={email} alt="email" width={30} />
              <span className="Fcontent_up_left_address_text">
                info@domain.com
              </span>
            </div>
          </div>
        </div>
        <div className="Fcontent_up_right">
          <div className="FcontentName">Download our App</div>
          <div className="Fcontent_up_right1">
            <div>
              <img src={appstore} alt="app store logo" width={150} />
            </div>
            <div>
              <img src={googleplay} alt="Google play logo" width={150} />
            </div>
          </div>
        </div>
      </div>
      <div className="Fcontent_line"></div>
      <div className="Fcontent_down">
        <ul className="Fcontent_down_list">
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedin} alt="LinkedIn Logo" width={40} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="Instagram Logo" width={40} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="Facebbok Logo" width={40} />
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/" target="_blank">
              <img src={whatsapp} alt="Whatsapp Logo" width={40} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <img src={twitter} alt="X Logo" width={40} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} alt="youtube Logo" width={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fcontent;