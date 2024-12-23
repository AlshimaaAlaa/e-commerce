import React, { useEffect, useState, useContext } from "react";
import "./ProductsStyle.css";
import ReactStars from "react-rating-stars-component";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import NewProducts from "./NewProducts";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AllProducts() {
  const [products, setProducts] = useState([]);
  const cart = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
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
          setError(false);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
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
    toast.success("Product successfully added to Wishlist");
  };

  return (
    <div>
      <NavBar />
      <div className="AllproductsContainer">
        <h2 className="text-center Our Products mt-5">Our Products</h2>
        <hr className="AllproductsContainer__hr" />
        <div className="home-productsItems mt-5">
          {error ? (
            <div>
              <p
                className="text-center fw-bolder text-danger"
                style={{ marginTop: "20px", fontSize: "35px" }}
              >
                An error occurred , while fetching data !
              </p>
            </div>
          ) : loading ? (
            <div>
              <p
                style={{
                  fontSize: "35px",
                  marginTop: "20px",
                  fontFamily: "Satisfy",
                }}
              >
                Loading...
              </p>
            </div>
          ) : (
            <>
              <ul className="AllproductsContainer__innerItems">
                {products.map((product, index) => (
                  <div className="card" key={index}>
                    <li className="home-productCard__list">
                      <div className="containers">
                        <div className="Allproduct-img d-flex justify-content-center align-items-center">
                          <img src={product.image} alt="product-img " />
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
                                to={`/AllProducts/${product.id}`}
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
      <NewProducts />
      <Footer />
    </div>
  );
}
export default AllProducts;
