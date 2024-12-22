import React from "react";
import "./NavBar.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
function NavBar() {
  const cart = useContext(CartContext);
  return (
    <div className="navbarContainer">
      <div>
        <img src="/images/logo.png" className="" width={"100px"} alt="Logo" />
      </div>
      <div>
        <ul className="list">
          <li>
            <a href="/Home" className="a">
              Home
            </a>
          </li>
          <li>
            <a href="/AllProducts" className="a">
              Shop
            </a>
          </li>
          <li>
            <a href="/ContactUs" className="a">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-items">
        <div className="">
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #000",
              width: "3rem",
              height: "2.5rem",
              position: "relative",
            }}
            className="rounded-circle btn-light fw-lighter"
          >
            <img
              src="/images/3737372.png"
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
              alt="Cart Icon"
            />
            <div
              className="rounded-circle cart-icon d-flex justify-content-center align-items-center"
              style={{
                fontWeight: "lighter",
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cart.cartItems.length}
            </div>
          </button>
        </div>
        <div>
          <button
            style={{
              border: "1px solid #000",
              backgroundColor: "transparent",
              width: "3rem",
              height: "2.5rem",
              position: "relative",
            }}
            className="rounded-circle btn-light ms-4"
          >
            <img
              src="/images/heart-love-like-likes-loved-favorite-64.webp"
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
              alt="Wishlist Icon"
            />
            <div
              className="rounded-circle cart-icon d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cart.wishlistItems.length}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;