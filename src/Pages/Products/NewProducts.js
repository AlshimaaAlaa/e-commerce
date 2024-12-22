import React from "react";
import "./ProductsStyle.css";
// import ReactStars from "react-rating-stars-component";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function NewProducts() {
  const [products, setProducts] = useState([]);
  const cart = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await axios({
          url: "https://fakestoreapi.com/products",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          setLoading(false);
          setProducts(response.data);
        } else {
          setLoading(false);
          setError(error);
        }
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    cart.AddProductToCart(product);
    toast.success("Product successfully added to cart");
  };

  const handleAddToWishlist = (product) => {
    cart.AddProductToWishlist(product);
    toast.success("Product successfully added to wishlist");
  };

  return (
    <div>
      <div className="AllproductContainer mt-0">
        <div className="home-productsItems mt-0">
          {error ? (
            <div>
              <p
                className="text-danger text-center"
                style={{ fontSize: "35px", marginTop: "30px" }}
              >
                An error occurred when fetching data !
              </p>
            </div>
          ) : loading ? (
            <div>
              <p></p>
            </div>
          ) : (
            <>
              <ul className="AllproductsContainer__innerItems">
                {products.map((product, index) => (
                  <div className="card" key={index}>
                    <li className="home-productCard__list">
                      <div className="containers">
                        <div className="Allproduct-img d-flex justify-content-center align-items-center">
                          <img
                            src={product.image}
                            alt="product-img "
                            className="p-5"
                          />
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
                              className="details-btn "
                              onClick={() => handleAddToWishlist(product)}
                            >
                              <img
                                src="/images/download (3).png"
                                style={{
                                  width: "1.5rem",
                                  height: "1.5rem",
                                }}
                                alt="Details"
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
                                alt="Add to Cart"
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
                              <Link
                                to={`/NewProducts/${product.id}`}
                                className="product-details-link"
                              >
                                <img
                                  src="/images/download (6).png"
                                  style={{
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    textAlign: "center",
                                  }}
                                  alt="Product Details"
                                />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        {product.title && (
                          <>
                            <h5 className="mt-3">
                              {product.title.slice(0, 20)}
                            </h5>
                            {/* <ReactStars
                              count={5}
                              size={24}
                              isHalf={true}
                              value={3} // Assuming this should be a number
                              emptyIcon={<i className="far fa-star"></i>}
                              halfIcon={<i className="fa fa-star-half-alt"></i>}
                              fullIcon={<i className="fa fa-star"></i>}
                              activeColor="#ffd700"
                            /> */}
                            <p>{`${product.price} $`}</p>
                          </>
                        )}
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default NewProducts;
