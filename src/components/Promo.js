import React, { useState } from "react";

const Promo = () => {
  const card = [1, 2, 3];
  const [index, setIndex] = useState(0);

  return (
    <>
      <h3>Promo Spesial Untukmu</h3>
      <div className="card_promo pc">
        {card.map((data) => {
          return <div key={data} className={`card_${data}`}></div>;
        })}
      </div>
      <div className="top_slider4">
        <div
          style={{ transform: `translate3d(${-index * 101.5}%, 0, 0)` }}
          className="slider mobile"
        >
          <div className="sub_slider4 mobile">
            {card.map((data) => (
              <div key={data} className={`card_${data}`}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
