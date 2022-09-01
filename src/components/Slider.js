import React, { useEffect, useRef, useState } from "react";
import group8 from "../images/Group 8.png";
import path1 from "../svg/Path (1).svg";
import path2 from "../svg/Path (2).svg";
import mobilePic from "../images/kjnjrnrj.png";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const slides = [group8, group8, group8];
  const slidesMobile = [mobilePic, mobilePic, mobilePic];
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const renderButton = () => {
    if (index === slides.length - 1) {
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

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );
    return () => {
      resetTimeout();
    };
  }, [slides.length, index]);

  return (
    <>
      <div className="top_slider">
        <div
          style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
          className="slider pc"
        >
          <div className="sub_slider pc">
            {slides.map((src, index) => (
              <div className="image_box_slider" key={index}>
                <img className="image_slider" alt="frame-1" src={src}></img>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
          className="slider mobile"
        >
          <div className="sub_slider mobile">
            {slidesMobile.map((src, index) => (
              <div className="image_box_slider" key={index}>
                <img className="image_slider" alt="frame-1" src={src}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider_button_chevron_position">
        {renderButton2()}
        {renderButton()}
      </div>
      <div className="berandaSlider">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDots${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Slider;
