import React from "react";

import "./Wcontent.css";

import Fav1 from "../../assets/images/menu/fav1.jpg";

const Wcontent = () => {

  return (
    <body className="Wcontent">
      <div className="WcontentL">
        <img className="Wcontimg" src={Fav1} alt="Favorit01" />
        <p className="Wconttext">American Burguer</p>
        <div className="Wconticons">
          texto3
        </div>
        <pre>texto4</pre>
      </div>

      <div className="WcontentR">div2</div>
    </body>
  );

};

export default Wcontent;