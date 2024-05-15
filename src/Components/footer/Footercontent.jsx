import React from "react";

import "./fcontent.css";

import companyLogo from "../../assets/images/logo-copia.svg";

import linkedin from "../../assets/icons/social/linkedin-wh.svg";
import instagram from "../../assets/icons/social/instagram-wh.svg";
import facebook from "../../assets/icons/social/facebook-wh.svg";
import whatsapp from "../../assets/icons/social/whatsapp-wh.svg";
import twitter from "../../assets/icons/social/x-wh.svg";
import youtube from "../../assets/icons/social/youtube-sq-wh.svg";


const Fcontent = () => {
  return (
    <div className="Fcontent">
      <div className="Fcontent_up">
        <div className="Fcontent_up_left">
          <div className="Fcontent_up_left_1">
            <p>
              <img className="FcontentLogo" src={companyLogo} alt="Logo" width={120} />
            </p>
            <p>2</p>
            <p>3</p>
          </div>
          <div>text2</div>
        </div>
        <div className="Fcontent_up_right">text3</div>
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