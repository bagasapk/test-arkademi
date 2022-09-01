import React, { useState } from "react";
import card from "../json/card2.json";
import img from "../images/COBA THUMBNAIL homepagemarkerplace.png";
import path1 from "../svg/Path (1).svg";
import path2 from "../svg/Path (2).svg";
import star from "../svg/Combined Shape.svg";

const Pengembangan = () => {
  const [index, setIndex] = useState(0);
  const renderButton = () => {
    if (index === 2) {
      return <span></span>;
    } else {
    return (
      <div
        role="button"
        className="slider_button_chevron"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <img alt="right" src={path2}></img>
      </div>
    );
    }
  };

  const renderButton2 = () => {
    if (index === 0) {
      return <span></span>;
    } else {
    return (
      <div
        role="button"
        className="slider_button_chevron"
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <img alt="right" src={path1}></img>
      </div>
    );
    }
  };

  const renderLike = (number) => {
    if (number > 1000) {
      return (
        <p>
          {"(>"}1000{")"}
        </p>
      );
    } else {
      return <p>{number}</p>;
    }
  };

  const renderDisc = (disc, price) => {
    if (disc > 0) {
      let totalMinus = (price * disc) / 100;
      let total = price - totalMinus;
      return (
        <>
          <div className="slider3_discount">
            <p className="disc_box">{disc}%</p>
            <p className="disc_price">Rp {price}</p>
          </div>
          <p className="disc_total">Rp {total}</p>
        </>
      );
    } else {
      return (
        <div className="disc_no_box">
          <p className="disc_total">Rp {price}</p>
        </div>
      );
    }
  };

  return (
    <div className="trending pengembangan">
      <div className="trending_title_terbaru">
        <h2>Pengembangan Karir</h2>
        <p>Lihat Semua</p>
      </div>
      <div className="top_slider3">
        <div
          style={{ transform: `translate3d(${-index * 89}vw, 0, 0)` }}
          className="slider"
        >
          <div className="sub_slider3">
            {card.map((src, index) => (
              <div className="image_box_slider3" key={index}>
                <img className="slider3_img" alt="frame-1" src={img}></img>
                <div className="slider3_padding">
                  <p className="slider3_type">{src.type}</p>
                  <p className="slider3_title">{src.title}</p>
                  <div className="slider3_rating">
                    <img alt="star" src={star}></img>
                    <p className="slider3_star_text">{src.star}</p>
                    {renderLike(src.like)}
                  </div>
                  {renderDisc(src.disc, src.price)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider3_button_chevron_position pc">
        {renderButton2()}
        {renderButton()}
      </div>
    </div>
  );
};

export default Pengembangan;
