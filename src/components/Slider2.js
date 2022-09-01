import React, { useState } from "react";
import card from "../json/card1.json";
import Akuntansi from "../images/Arkademi-Kursus-Online-Thumbnail-Mengumpulkan-Modal-dengan-Strategi-Alokasi-Aset.png";
import K3 from "../images/Arkademi-Kursus-Online-Thumbnail-Mengumpulkan-Modal-dengan-Strategi-Alokasi-Aset (1).png";
import K3LL from "../images/Arkademi-Kursus-Online-Thumbnail-Mengumpulkan-Modal-dengan-Strategi-Alokasi-Aset (2).png";
import path1 from "../svg/Path (1).svg";
import path2 from "../svg/Path (2).svg";

const Slider2 = () => {
  const [index, setIndex] = useState(0);
  const key = [Akuntansi, K3, K3LL];
  const renderButton = () => {
    if (index === card.length/3 - 1) {
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
  return (
    <>
      <div className="top_slider slider2">
        <div
          style={{ transform: `translate3d(${-index * 93.5}vw, 0, 0)` }}
          className="slider"
        >
          <div className="sub_slider slider2">
            {card.map((src, index) => (
              <div className="image_box_slider slider2" key={index}>
                <p>
                  Menjadi Ahli <span className="text_slider2">{src.text}</span>
                </p>
                <img
                  className="image_slider slider2"
                  alt="frame-1"
                  src={key[src.id - 1]}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider2_button_chevron_position">
        {renderButton2()}
        {renderButton()}
      </div>
      <button className="button_style_2">Lihat Semua Spesialisasi</button>
    </>
  );
};

export default Slider2;
