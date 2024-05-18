import React from "react";

import "./Bmenu.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function BMenu() {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const settings4 = {
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

      <div className="BMenu1">
        <div className="Bmenutop2">
          <p className="BmenuTop2Title">
            Grilled
          </p>
          <span className="BmenuTop2Line"></span>
        </div>

        <div className="Carousel">
          <div>
            <Slider {...settings1}>
              {data1.map((d) => (
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
      </div>

      <div className="BMenu2">
        <div className="Bmenutop2">
          <p className="BmenuTop2Title2">Fast Food</p>
          <span className="BmenuTop2Line2"></span>
        </div>

        <div className="Carousel">
          <div>
            <Slider {...settings2}>
              {data2.map((d) => (
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
      </div>

      <div className="BMenu3">
        <div className="Bmenutop2">
          <p className="BmenuTop2Title2">Drinks</p>
          <span className="BmenuTop2Line2"></span>
        </div>

        <div className="Carousel">
          <div>
            <Slider {...settings3}>
              {data3.map((d) => (
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
      </div>

      <div className="BMenu4">
        <div className="Bmenutop2">
          <p className="BmenuTop2Title2">Desserts</p>
          <span className="BmenuTop2Line2"></span>
        </div>

        <div className="Carousel">
          <div>
            <Slider {...settings4}>
              {data4.map((d) => (
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
      </div>
    </>
  );
}

const data1 = [
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

const data2 = [
  {
    name: "BBQ Chicken Wings",
    img: "/images/fastfood/001.jpg",
    Price1: "$26,",
    Price2: "50",
  },
  {
    name: "Suaces with French Fries",
    img: "/images/fastfood/002.jpg",
    Price1: "$22,",
    Price2: "25",
  },
  {
    name: "Suaces with Arepa",
    img: "/images/fastfood/003.jpg",
    Price1: "$19,",
    Price2: "90",
  },
  {
    name: "Choripan",
    img: "/images/fastfood/004.jpg",
    Price1: "$20,",
    Price2: "75",
  },
  {
    name: "Onion Rings",
    img: "/images/fastfood/005.jpg",
    Price1: "$23,",
    Price2: "00",
  },
  {
    name: "Coctail Empanadas",
    img: "/images/fastfood/006.jpg",
    Price1: "$17,",
    Price2: "50",
  },
  {
    name: "Potato Casserole",
    img: "/images/fastfood/007.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Salchipapa",
    img: "/images/fastfood/008.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Shelled Corn",
    img: "/images/fastfood/009.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Chicken Nuggets",
    img: "/images/fastfood/010.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Children Menu",
    img: "/images/fastfood/011.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Serving of eggs",
    img: "/images/fastfood/012.jpg",
    Price1: "$37,",
    Price2: "25",
  },
];

const data3 = [
  {
    name: "dopi",
    img: "/images/drinks/001.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "fenta",
    img: "/images/drinks/002.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "coda",
    img: "/images/drinks/003.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "foble",
    img: "/images/drinks/004.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "topble",
    img: "/images/drinks/005.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Feva",
    img: "/images/drinks/006.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "siaba",
    img: "/images/drinks/007.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Bale",
    img: "/images/drinks/008.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Saica",
    img: "/images/drinks/009.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Codd",
    img: "/images/drinks/010.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca cola Space",
    img: "/images/drinks/011.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola CAD",
    img: "/images/drinks/012.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola",
    img: "/images/drinks/013.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola Ice Berry",
    img: "/images/drinks/014.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Sesta",
    img: "/images/drinks/015.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola Orange",
    img: "/images/drinks/016.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Bodie",
    img: "/images/drinks/017.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Dobb",
    img: "/images/drinks/018.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Soia",
    img: "/images/drinks/019.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola dceh",
    img: "/images/drinks/020.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola cuich",
    img: "/images/drinks/021.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola febs",
    img: "/images/drinks/022.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola cerba",
    img: "/images/drinks/023.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola green",
    img: "/images/drinks/024.jpg",
    Price1: "$4,",
    Price2: "00",
  },
  {
    name: "Coca Cola apple",
    img: "/images/drinks/025.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "AEPPHAA",
    img: "/images/drinks/026.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Dppae",
    img: "/images/drinks/027.jpg",
    Price1: "$3,",
    Price2: "00",
  },
  {
    name: "Coca Cola",
    img: "/images/drinks/028.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Color TE",
    img: "/images/drinks/029.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Color TE",
    img: "/images/drinks/030.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Color TEE",
    img: "/images/drinks/031.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Coca Cola",
    img: "/images/drinks/032.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Bendi",
    img: "/images/drinks/033.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Soda",
    img: "/images/drinks/034.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Siosid SODA",
    img: "/images/drinks/035.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Poda",
    img: "/images/drinks/036.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Donta",
    img: "/images/drinks/037.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Sorda",
    img: "/images/drinks/038.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Saba",
    img: "/images/drinks/039.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "aca Sola",
    img: "/images/drinks/040.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Senid8",
    img: "/images/drinks/041.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Coca Cola Coba",
    img: "/images/drinks/042.jpg",
    Price1: "$3,",
    Price2: "50",
  },
  {
    name: "Spichac",
    img: "/images/drinks/043.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "SEDNA",
    img: "/images/drinks/044.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Coda",
    img: "/images/drinks/045.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Soda Dexratt",
    img: "/images/drinks/046.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Coca Cola",
    img: "/images/drinks/047.jpg",
    Price1: "$37,",
    Price2: "25",
  },
];

const data4 = [
  {
    name: "Baked Alaska",
    img: "/images/desserts/001.jpg",
    Price1: "$23,",
    Price2: "40",
  },
  {
    name: "Oreo Dessert",
    img: "/images/desserts/002.jpg",
    Price1: "$25,",
    Price2: "00",
  },
  {
    name: "Coffee Dessert",
    img: "/images/desserts/003.jpg",
    Price1: "$28,",
    Price2: "00",
  },
  {
    name: "Almond Dessert",
    img: "/images/desserts/004.jpg",
    Price1: "$18,",
    Price2: "25",
  },
  {
    name: "Berries Dessert",
    img: "/images/desserts/005.jpg",
    Price1: "$38,",
    Price2: "75",
  },
  {
    name: "Mango Dessert",
    img: "/images/desserts/006.jpg",
    Price1: "$29,",
    Price2: "00",
  },
  {
    name: "Creme Brulee",
    img: "/images/desserts/007.jpg",
    Price1: "$32,",
    Price2: "50",
  },
  {
    name: "Tiramisu",
    img: "/images/desserts/008.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Strawberry Pie",
    img: "/images/desserts/009.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Passion Fruit Dessert",
    img: "/images/desserts/010.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Truffles",
    img: "/images/desserts/011.jpg",
    Price1: "$37,",
    Price2: "25",
  },
  {
    name: "Lemmon Pie",
    img: "/images/desserts/012.jpg",
    Price1: "$37,",
    Price2: "25",
  },
];
export default BMenu;
