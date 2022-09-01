import React from "react";
import lembaga from "../json/lembaga.json";
import perusahaan1 from "../images/lembaga/Oval 2 (1).png";
import perusahaan2 from "../images/lembaga/Oval 2 (2).png";
import perusahaan3 from "../images/lembaga/Oval 2 (3).png";
import perusahaan4 from "../images/lembaga/Oval 2 (4).png";
import perusahaan5 from "../images/lembaga/Oval 2 (5).png";
import perusahaan6 from "../images/lembaga/Oval Copy 14.png";
import perusahaan7 from "../images/lembaga/Oval Copy 15.png";
import perusahaan8 from "../images/lembaga/Oval Copy 16.png";
import perusahaan9 from "../images/lembaga/Oval Copy 17.png";
import perusahaan10 from "../images/lembaga/Oval Copy 18.png";
import perusahaan11 from "../images/lembaga/Oval Copy 19.png";
import perusahaan12 from "../images/lembaga/Oval Copy 20.png";
import perusahaan13 from "../images/lembaga/Oval Copy 21.png";
import perusahaan14 from "../images/lembaga/Oval Copy 22.png";

const Lembaga = () => {
  const keys = [
    perusahaan1,
    perusahaan2,
    perusahaan3,
    perusahaan4,
    perusahaan5,
    perusahaan6,
    perusahaan7,
    perusahaan8,
    perusahaan9,
    perusahaan10,
    perusahaan11,
    perusahaan12,
    perusahaan13,
    perusahaan14,
  ];
  return (
    <>
      <h3>Lembaga</h3>
      <div className="popular lembaga">
        {lembaga.map((data, key) => {
          return (
            <div key={key} className="popular_box lembaga">
              <img alt={data.name} src={keys[data.id - 1]}></img>
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Lembaga;
