import React from "react";
import bisnis from "../svg/kategori/Oval 2.svg";
import keuangan from "../svg/kategori/Oval 2 (1).svg";
import pengembangan from "../svg/kategori/Oval 2 (2).svg";
import sertifikasi from "../svg/kategori/Oval 2 (3).svg";
import teknologi from "../svg/kategori/Oval 2 (4).svg";
import hobi from "../svg/kategori/Oval 2 (5).svg";
import bahasa from "../svg/kategori/Oval 2 (6).svg";
import kategori from "../json/kategori.json";

const Popular = () => {
  const img = [
    bisnis,
    keuangan,
    pengembangan,
    sertifikasi,
    teknologi,
    hobi,
    "korporat",
    bahasa,
  ];
  return (
    <>
      <h3>Kategori Terpopuler</h3>
      <div className="popular">
        {kategori.map((data, key) => {
          return data.popular === true ? (
            <div className="popular_box">
              <img alt={data.kategori} src={img[data.id - 1]}></img>
              <p>{data.kategori}</p>
            </div>
          ) : null;
        })}
      </div>
      <button className="button_style_3">Lihat Semua Kategori</button>
    </>
  );
};

export default Popular;
