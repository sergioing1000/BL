import React from "react";

import "./Bmenu.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function BMenu() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="Bmenutop">
        <p className="BmenuTopTitle">MENU</p>
      </div>

      <div className="Bmenutop2">
        <p className="BmenuTop2Title">Grilled</p>
        <span className="BmenuTop2Line"></span>
      </div>

      <div className="Carousel">
        <div>
          <Slider {...settings}>
            {data.map((d) => (
              <div className="card">
                <div className="topCard">
                  <div className="cardimageframe">
                    <img
                      className="cardimage"
                      src={d.img}
                      alt={d.name}
                      width={140}
                    />
                  </div>
                </div>
                <div className="bottomCard">
                  <p className="Cardtextname">{d.name}</p>
                  <span className="CardPrice1">{d.Price1}</span>
                  <span className="CardPrice2">{d.Price2}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "Steak",
    img: "/images/grilled/001.jpg",
    Price1: "$23,",
    Price2: "40",
  },
  {
    name: "Gratin Steak",
    img: "/images/grilled/002.jpg",
    Price1: "$25,",
    Price2: "00",
  },
  {
    name: "Gratin Onion Steak",
    img: "/images/grilled/003.jpg",
    Price1: "$28,",
    Price2: "00",
  },
  {
    name: "Chicken Soup",
    img: "/images/grilled/004.jpg",
    Price1: "$18,",
    Price2: "25",
  },
  {
    name: "BBQ Ribs",
    img: "/images/grilled/005.jpg",
    Price1: "$38,",
    Price2: "75",
  },
  {
    name: "Chicken Breast",
    img: "/images/grilled/006.jpg",
    Price1: "$29,",
    Price2: "00",
  },
  {
    name: "Gratin Chicken Breast",
    img: "/images/grilled/007.jpg",
    Price1: "$32,",
    Price2: "50",
  },
  {
    name: "Gratin Chicken Mushrooms Breast",
    img: "/images/grilled/008.jpg",
    Price1: "$37,",
    Price2: "25",
  },
];
export default BMenu