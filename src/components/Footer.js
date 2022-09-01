import React from "react";
import kategori from "../json/kategori.json";
import partner1 from "../images/Arkademi WEB/visa-card-logo-9 1.png";
import partner2 from "../images/Arkademi WEB/shopeepay-logo.png";
import partner3 from "../images/Arkademi WEB/permata-bank-png-5.png";
import partner4 from "../images/Arkademi WEB/Pasted Graphic 1 1.png";
import partner5 from "../images/Arkademi WEB/MasterCard_Logo 1.png";
import partner6 from "../images/Arkademi WEB/Mandiri_logo.png";
import partner7 from "../images/Arkademi WEB/Logo Bank BNI 1.png";
import partner8 from "../images/Arkademi WEB/GoPay.png";
import partner9 from "../images/Arkademi WEB/BCA_logo_Bank_Central_Asia.png";
import partner10 from "../images/Arkademi WEB/Bank Rakyat Indonesia (BRI) 1.png";
import partner11 from "../images/Arkademi WEB/ATM_Bersama_2016.png";
import partner12 from "../images/Arkademi WEB/Alfamart_logo 1.png";
import partner13 from "../images/Arkademi WEB/2560px-CIMB_Niaga_logo 1.png";
import sosmed1 from "../svg/001-facebook.svg";
import sosmed2 from "../svg/002-youtube.svg";
import sosmed3 from "../svg/003-linkedin.svg";
import sosmed4 from "../svg/004-instagram.svg";
import googlePlay from "../images/Group Copy 2.png";
import appStore from "../images/Group 2 Copy 2.png";

const Footer = () => {
  const img = [
    partner1,
    partner5,
    partner6,
    partner9,
    partner7,
    partner10,
    partner3,
    partner13,
    partner11,
    partner8,
    partner2,
    partner12,
    partner4,
  ];

  const sosmed = [sosmed1, sosmed2, sosmed4, sosmed3];

  return (
    <>
      <div className="footer">
        <div>
          <h4>Kategori Populer</h4>
          {kategori.slice(0, 6).map((data) => {
            return data.popular ? <p className="kategori_data">{data.kategori}</p> : null;
          })}
        </div>
        <div className="lainnya">
          <h4>Lainnya</h4>
          <p>Panduan</p>
          <p>FAQ</p>
          <p>Tentang Kami</p>
          <p>Karier</p>
          <p>Privacy Policy</p>
        </div>
        <div className="partner_footer">
          <h4>Metode Pembayaran</h4>
          <div className="partner_logo">
            {img.map((data) => {
              return (
                <img className="partner_logo" alt="partner" src={data}></img>
              );
            })}
          </div>
        </div>
        <div className="footer_sosmed">
          <h4>Ikuti Kami</h4>
          <div className="sosmed">
            {sosmed.map((data) => {
              return <img className="sosmed_logo" alt={data} src={data}></img>;
            })}
          </div>
          <h4>Arkademi Mobile App</h4>
          <div className="download">
            <img alt="google play" src={googlePlay}></img>
            <img alt="app store" src={appStore}></img>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>© 2022 PT Arkademi Daya Indonesia</p>
        <div className="footer_sub">
          <p>Ketentuan Layanan</p>
          <p>Kontak</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
