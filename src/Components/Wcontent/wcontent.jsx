import React from "react";

import "./Wcontent.css";

import Fav1 from "../../assets/images/menu/fav1.jpg";
import Fav2 from "../../assets/images/menu/fav2.jpg";
import Burger from "../../assets/icons/burger.png";
import Ffries from "../../assets/icons/frenchfries.png";
import Soda from "../../assets/icons/soda.png";

const Wcontent = () => {

  return (
    <div className="Wcontent">
      <div className="WcontentL">
        <img className="Wcontimg" src={Fav1} alt="Favorit01" />
        <p className="Wconttext">American Burguer</p>
        <div className="Wconticons">
          <img src={Burger} alt="Burger Icon" width={40} />
          <span>+</span>
          <img src={Ffries} alt="Ffries Icon" width={40} />
          <span>+</span>
          <img src={Soda} alt="Soda Icon" width={40} />
        </div>
        <div>
          <span className="WcontPrice1">$12,</span>
          <span className="WcontPrice2">40</span>
        </div>
      </div>

      <div className="WcontentR">
        <img className="Wcontimg" src={Fav2} alt="Favorit02" />
        <p className="Wconttext">Mix Burguer</p>
        <div className="Wconticons">
          <img src={Burger} alt="Burger Icon" width={40} />
          <span>+</span>
          <img src={Ffries} alt="Ffries Icon" width={40} />
          <span>+</span>
          <img src={Soda} alt="Soda Icon" width={40} />
        </div>
        <div>
          <span className="WcontPrice1">$14,</span>
          <span className="WcontPrice2">40</span>
        </div>
      </div>
    </div>
  );

};

export default Wcontent;