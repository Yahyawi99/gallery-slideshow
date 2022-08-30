import React, { useState } from "react";
// CSS
import "./Slideshow.css";
import "../Header.css";
// Router
import { useParams, Link } from "react-router-dom";
// Data
import Data from "../data";
// useContext
import { UseItGlobally } from "../useContext";

const Sildeshow = () => {
  const { id } = useParams();
  const [myId, setMyId] = useState(id);

  const { name, year, description, source, artist, images } = Data[myId];

  const { showModal, setShowModal } = UseItGlobally();
  return (
    <>
      <Header />
      <article className="slideshow">
        <section className="slide">
          <div className="slide-image-section">
            <img
              src={images.hero.small}
              alt="background"
              className="background"
            />
            <div className="name-artist-card">
              <h1>{name}</h1>
              <p>{artist.name}</p>
            </div>
            <img src={artist.image} alt="artist" className="artist-image" />
            <button
              className="image-btn"
              onClick={() => {
                setShowModal(true);
                window.scrollTo({
                  top: 0,
                });
                document.body.style.overflow = "hidden";
              }}
            >
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="nonzero">
                  <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
                </g>
              </svg>
              <span>VIEW IMAGE</span>
            </button>
          </div>

          <div className="slide-description">
            <p className="year">{year}</p>
            <p className="description">{description}</p>
            <a href={source} className="source">
              GO TO SOURCE
            </a>
          </div>
        </section>

        <footer
          style={{
            "--value": (100 / 15) * (Number(myId) + 1) + "%",
          }}
        >
          <div className="footer-name">
            <h2>{name}</h2>
            <h3>{artist.name}</h3>
          </div>

          <div className="next-back">
            <div
              className="back"
              onClick={() => {
                if (Number(myId) > 0) {
                  setMyId(Number(myId) - 1);
                } else {
                  setMyId(Data.length - 1);
                }
              }}
            >
              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#000" fill="none" fillRule="evenodd">
                  <path
                    d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                    strokeWidth="2"
                  />
                  <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
                </g>
              </svg>
            </div>

            <div
              className="next"
              onClick={() => {
                if (Number(myId) < Data.length - 1) {
                  setMyId(Number(myId) + 1);
                } else {
                  setMyId(0);
                }
              }}
            >
              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#000" fill="none" fillRule="evenodd">
                  <path
                    d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                    strokeWidth="2"
                  />
                  <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
                </g>
              </svg>
            </div>
          </div>

          <div className="progress"></div>
        </footer>

        {showModal && (
          <Modal image={images.hero.large} setShowModal={setShowModal} />
        )}
      </article>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={"/assets/shared/logo.svg"} alt="logo" className="logo" />
      </Link>

      <Link to={`/`} className="header-btn">
        STOP SLIDESHOW
      </Link>
    </header>
  );
};

const Modal = ({ image, setShowModal }) => {
  return (
    <div
      className="modal"
      onClick={() => {
        setShowModal(false);
        document.body.style.overflow = "visible";
      }}
    >
      <img src={image} alt="modal" className="modal-image" />
    </div>
  );
};

export default Sildeshow;
