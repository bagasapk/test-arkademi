import "./App.css";
import Bisnis from "./components/Bisnis";
import CompanyProfile from "./components/CompanyProfile";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import Lembaga from "./components/Lembaga";
import Navbar from "./components/Navbar";
import Pengembangan from "./components/Pengembangan";
import Popular from "./components/Popular";
import Promo from "./components/Promo";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import Terbaru from "./components/Terbaru";
import Testimoni from "./components/Testimoni";
import Trending from "./components/Trending";
import kategori from "./json/kategori.json";
import path from "./svg/Path.svg";
import hamburger from './svg/Combined Shape (3).svg'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="kategori">
        <p className="kategori_title">Kategori</p>
        <img className="kategori_dropdown" alt="dropdown" src={path}></img>
        <div className="sub_kategori pc">
          {kategori.length > 0 ? (
            kategori.map((data) => <p className="kategori_data">{data.kategori}</p>)
          ) : (
            <p>No Data</p>
          )}
        </div>
        <div className="sub_kategori mobile">
          {kategori.length > 0 ? (
            kategori.slice(0,2).map((data) => <p>{data.kategori}</p>)
          ) : (
            <p>No Data</p>
          )}
          <img alt="hamburger_button" src={hamburger}></img>
        </div>
      </div>
      <Slider></Slider>
      <Slider2></Slider2>
      <Trending></Trending>
      <FlashSale></FlashSale>
      <Popular></Popular>
      <Promo></Promo>
      <Lembaga></Lembaga>
      <Terbaru></Terbaru>
      <Bisnis></Bisnis>
      <Pengembangan></Pengembangan>
      <Testimoni></Testimoni>
      <CompanyProfile></CompanyProfile>
      <Footer></Footer>
    </div>
  );
}

export default App;
