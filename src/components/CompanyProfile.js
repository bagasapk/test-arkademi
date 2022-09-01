import React from "react";
import design1 from "../images/Group 32.png";
import logo from "../svg/Asset 4.svg";
import partner1 from "../images/comprof/1_At6CQBf2-9u2jBXDLmlYpA.png";
import partner2 from "../images/comprof/Y_Combinator_logo_text_wordmark.png";
import partner3 from "../images/comprof/1_wpuq8Qaz788rp9Spzmt9Jg.png";
import partner4 from "../images/comprof/1280px-Google_for_Startups_logo.svg Copy 3.png";

const CompanyProfile = () => {
  return (
    <div className="comprof">
      <img className="design" alt="design" src={design1}></img>
      <div className="comprof_desc">
        <img className="logo" alt="logo" src={logo}></img>
        <p>
          Arkademi adalah massive open online course (MOOC) platform karya anak
          bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill
          based learning atau pembelajaran berbasis keahlian yang diantarkan
          melalui kelas belajar dan kursus online melalui aplikasi Arkademi
          berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga
          kursus dapat membuka dan mengkomersialkan kelas onlinenya dan
          menjangkau siswa dari seluruh Indonesia.
        </p>
        <h4>Akselerator</h4>
        <p className="text_2">
          Arkademi adalah bagian program inkubasi dan akselerator dari
          perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon
          Web Service (Edstart Program) dan Y Combinator (Startup School) yang
          dipilih dari tech startup edukasi terbaik dunia.
        </p>
        <div className="comprof_partner">
          <img src={partner1}></img>
          <img src={partner2}></img>
          <img src={partner3}></img>
          <img src={partner4}></img>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
