import React, { useEffect, useState } from "react";
import "./CategoriesStyle.css";
// import ReactStars from "react-rating-stars-component";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
function WomenClothing() {
  const [WomenClothing, setWomenClothing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const cart = useContext(CartContext);
  useEffect(() => {
    async function fetchEectronics() {
      setLoading(true);
      try {
        const response = await axios({
          url: "https://fakestoreapi.com/products/category/women's clothing",
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
          setLoading(false);
          setWomenClothing(response.data);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
    fetchEectronics();
  }, []);

  const handleAddToCart = (item) => {
    cart.AddProductToCart(item);
    toast.success("prosuct successfully added to cart");
  };
  const handleAddToWishlist = (item) => {
    cart.AddProductToWishlist(item);
    toast.success("prosuct successfully added to wishlist");
  };
  return (
    <>
      <NavBar />
      <div className="WomenClothingContainer">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Women Clothing</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {error ? (
          <p
            className="text-center text-danger"
            style={{
              fontFamily: "Satisfy",
              fontSize: "35px",
              margin: "80px 0px 100px 0px",
            }}
          >
            An error occurred when fetching data !
          </p>
        ) : loading ? (
          <p
            className="text-center"
            style={{
              fontFamily: "Satisfy",
              margin: "80px 0px 100px 0px",
              fontSize: "35px",
            }}
          >
            Loading....
          </p>
        ) : (
          <>
            <ul className="WomenClothingList list-unstyled">
              {WomenClothing.map((item) => (
                <li key={item.id} className="WomenClothingList__items">
                  <div className="containers">
                    <div className="WomenClothingsContainer__img">
                      <img
                        src={item.image}
                        alt="womenClothes"
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
                          onClick={() => handleAddToWishlist(item)}
                        >
                          <img
                            src="/images/download (3).png "
                            alt="wishlist"
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                            }}
                          />
                        </Button>
                        <Button
                          style={{
                            width: "3rem",
                            height: "2.5rem",
                            position: "relative",
                          }}
                          variant="outline-none"
                          className="details-btn "
                          onClick={() => handleAddToCart(item)}
                        >
                          <img
                            src="/images/3523885.png"
                            alt="cart"
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                            }}
                          />
                        </Button>
                        <Button
                          style={{
                            width: "3rem",
                            height: "2.5rem",
                            position: "relative",
                          }}
                          variant="outline-none"
                          className="details-btn "
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        >
                          <Link to={`/WomenClothing/${item.id}`}>
                            <img
                              src="/images/download (6).png"
                              alt=""
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                textAlign: "center",
                              }}
                            />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h5 className="mt-3">{item.title.slice(0, 20)}</h5>
                    {/* <ReactStars
                count={5}
                size={24}
                isHalf={true}
                value={"3"} // is a default value
                // edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              /> */}
                    <p className="fw-bolder">{`${item.price} $`}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default WomenClothing;
