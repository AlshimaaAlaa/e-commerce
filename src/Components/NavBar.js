import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './style.css'
function NavBar() {
  const cart = useContext(CartContext);;

  return (
    <div className='nav'>
      <Navbar expand="sm" className='navBar p-3 '>
        <Navbar.Brand href='/'>
          <img src='/images/logo.png' className='' width={"120px"} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center ms-5 ">
          <ul className='list mt-4'>
            <li><a href='/' className='a'>HOME</a></li>
            <li><a href='/AllProducts' className='a'>SHOP</a></li>
            <li><a href='/ContactUs' className='a'>CONTACT US</a></li>
            <li><a href='/Login' className='a'>LOGIN</a></li>
          </ul>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-center">
          <div className='cart-btn'>
            <a href='/Cart'>
              <Button
                style={{
                  width: "3rem",
                  height: "2.5rem",
                  position: "relative",
                }}
                className="rounded-circle btn-light "
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
              </Button>
            </a>

            <a href='/Wishlist'>
              <Button
                style={{
                  width: "3rem",
                  height: "2.5rem",
                  position: "relative",
                }}
                className="rounded-circle btn-light ms-3"
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
              </Button>
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
