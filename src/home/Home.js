import React from "react";
// CSS
import "./Home.css";
import "../Header.css";
// Data
import Data from "../data";
// Router
import { Link } from "react-router-dom";
// useContext
import { UseItGlobally } from "../useContext";

const Home = () => {
  const { setPath, setText } = UseItGlobally();

  return (
    <>
      <Header />
      <section className="galleria-container">
        {Data.map((gallery, i) => {
          const { name, artist, images } = gallery;

          return (
            <Link
              key={i}
              to={`/slideshow/${i}`}
              className="card"
              onClick={() => {
                setText("STOP SLIDESHOW");
                setPath("");
              }}
            >
              <img src={images.gallery} alt="gallery-img" className="img" />
              <p className="gallery-name">{name}</p>
              <p className="gallery-artist">{artist.name}</p>
            </Link>
          );
        })}
      </section>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={"/assets/shared/logo.svg"} alt="logo" className="logo" />
      </Link>

      <Link to={`/slideshow/0`} className="header-btn">
        START SLIDESHOW
      </Link>
    </header>
  );
};

export default Home;
