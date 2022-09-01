import React from "react";
import logo from "../svg/Asset 4.svg";
import fill176 from "../svg/Fill 176.svg";
import group6 from "../svg/Group 6.svg";

const Navbar = () => {
  return (
    <header className="App-navbar">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bar_1">
          <input type="text" placeholder="Cari Kelas"></input>
          <img src={fill176} alt="search" className="search_button"></img>
        </div>
        <img className="love" alt="love" src={group6}></img>
        <div className="navbar_button">
          <button className="button_primary">Masuk</button>
          <button className="button_secondary">Daftar</button>
        </div>
      </div>
      <div className="bar_2">
        <input type="text" placeholder="Cari Kelas"></input>
        <img src={fill176} alt="search" className="search_button"></img>
      </div>
    </header>
  );
};

export default Navbar;
