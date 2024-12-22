import React, { useEffect, useState, useContext } from "react";
import "./ProductsStyle.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const limitProducts = products.slice(0, 8);
  const cart = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios({
          url: "https://products-blush-phi.vercel.app/products",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setProducts(response.data);
        } else {
          console.error("Unexpected response status:", response.status);
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    cart.AddProductToCart(product);
    toast.success("Product successfully added to cart!");
  };

  const handleAddToWishlist = (product) => {
    cart.AddProductToWishlist(product);
    toast.success("Product successfully added to wishlist!");
  };

  return (
    <div className="container home-productsContainer">
      <h1 className="text-center mb-4 mt-5">Shop The Collection</h1>
      <p className="text-center text-secondary">
        Donec nec justo eget felis facilisis fermentum.
        <br />
        Aliquam porttitor mauris sit amet orci.
      </p>
      <div className="categories mt-5 mb-5">
        <Button className="categories__btn">
          <Link
            to="/Eectronics"
            className="link fs-5"
            style={{ fontFamily: "Acme" }}
          >
            Electronics
          </Link>
        </Button>
        <Button className="categories__btn">
          <Link
            to="/Jewelery"
            className="link fs-5"
            style={{ fontFamily: "Acme" }}
          >
            Jewelery
          </Link>
        </Button>
        <Button className="categories__btn">
          <Link
            to="/MenClothing"
            className="link fs-5"
            style={{ fontFamily: "Acme" }}
          >
            Men's clothing
          </Link>
        </Button>
        <Button className="categories__btn">
          <Link
            to="/WomenClothing"
            className="link fs-5"
            style={{ fontFamily: "Acme" }}
          >
            Women's clothing
          </Link>
        </Button>
      </div>

      {error ? (
        <div className="text-center">
          <p
            className="text-danger"
            style={{ marginTop: "80px", fontSize: "28px" , fontFamily:"Satisfy"}}
          >
            An error occurred while loading data.
          </p>
        </div>
      ) : loading ? (
        <div className="text-center">
          <p style={{ fontSize: "35px", marginTop: "80px", fontFamily:"Satisfy" }}>Loading...</p>
        </div>
      ) : (
        <>
          <div className="home-productsItems mt-5">
            <ul className="innerItems">
              {limitProducts.map((product, index) => (
                <div className="home-productCard" key={index}>
                  <li className="home-productCard__list">
                    <div className="containers">
                      <div className="product-img d-flex justify-content-center align-items-center">
                        <img src={product.image} alt="product-img" />
                      </div>
                      <div className="overlay">
                        <div className="text">
                          <Button
                            style={{
                              width: "3rem",
                              height: "2.5rem",
                              position: "relative",
                            }}
                            variant="outline-none"
                            className="details-btn"
                            onClick={() => handleAddToWishlist(product)}
                          >
                            <img
                              src="/images/download (3).png"
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                              }}
                              alt="wishlist-icon"
                            />
                          </Button>
                          <Button
                            style={{
                              width: "3rem",
                              height: "2.5rem",
                              position: "relative",
                            }}
                            variant="outline-none"
                            className="details-btn"
                            onClick={() => handleAddToCart(product)}
                          >
                            <img
                              src="/images/3523885.png"
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                              }}
                              alt="cart-icon"
                            />
                          </Button>
                          <Button
                            style={{
                              width: "3rem",
                              height: "2.5rem",
                              position: "relative",
                            }}
                            variant="outline-none"
                            className="details-btn"
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                          >
                            <Link to={`AllProducts/${product.id}`}>
                              <img
                                src="/images/download (6).png"
                                style={{
                                  width: "1.5rem",
                                  height: "1.5rem",
                                }}
                                alt="details-icon"
                              />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h5 className="mt-3">{product.title.slice(0, 20)}</h5>
                      <p>{`${product.price} $`}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center mt-3">
            <button className="all">
              <Link to="/AllProducts" className="displayAll">
                Show All Products
              </Link>
            </button>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
}

export default HomeProducts;
