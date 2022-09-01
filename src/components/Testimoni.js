import React, { useState } from "react";
import testimoni from "../json/testimoni.json";
import oval from "../images/profile/Oval.png";
import oval1 from "../images/profile/Oval (1).png";
import oval2 from "../images/profile/Oval (2).png";
import combinedShape from "../svg/Combined Shape (2).svg";

const Testimoni = () => {
  const img = [oval, oval1, oval2];
  const [index, setIndex] = useState(0);
  return (
    <div className="testimoni">
      <h2>Testimoni</h2>
      <div className="testimoni_card">
        {testimoni.map((data) => {
          return (
            <div
              style={{ transform: `translate3d(${-index * 111}%, 0, 0)` }}
              className="testimoni_card_body"
            >
              <img alt="kutip" src={combinedShape}></img>
              <p className="testimoni_text">{data.testimoni}</p>
              <div className="testimoni_profile">
                <img
                  alt={data.profile.name}
                  src={img[data.profile.userId - 1]}
                ></img>
                <div className="testimoni_profile_text">
                  <p className="profile_name">{`${data.profile.name} (${data.profile.loc})`}</p>
                  <p className="profile_desc">{data.profile.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="berandaSlider">
        {testimoni.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDots black${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
