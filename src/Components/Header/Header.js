import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
function Header() {
  return (
    <div>
      <header className="header">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active item">
              <img
                src="/images/photo-1477901492169-d59e6428fc90.avif"
                className="d-block w-100 header-img"
                alt=""
              />
              <div className="caption">
                <h5 className="mt-5">Want to know what's hot?</h5>
                <h1 className="fw-bolder">Spring Lookbook 2024</h1>
                <button className="header__btn">
                  <a href="#whyShop" className="header__btn__link">
                    start scrolling
                  </a>
                </button>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="/images/istockphoto-1389850370-612x612.jpg"
                className="d-block w-100 header-img"
                alt=""
              />
              <div className="caption">
                <h5 className="">Want to know what's hot?</h5>
                <h1 className="fw-bolder">Spring Lookbook 2024</h1>
                <button className="header__btn">start scrolling</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/photo-1462392246754-28dfa2df8e6b.avif"
                className="d-block w-100 header-img"
                alt=""
              />
              <div className="caption">
                <h5 className="">Want to know what's hot?</h5>
                <h1 className="fw-bolder">Spring Lookbook 2024</h1>
                <button className="header__btn">start scrolling</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
