import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./style.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
function CategoryDetails() {
  const { id } = useParams();
  const [ProductDetail, setProductDetails] = useState([]);
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(ProductDetail);
  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios({
          url: `https://fakestoreapi.com/products/${id}`,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
          setProductDetails(response.data);
        } else {
          console.error("an error occured !");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchDetails();
  }, [id]);
  const handleAddToCart = () => {
    cart.AddProductToCart(ProductDetail);
    toast.success("prosuct successfully added to cart");
  };
  const handlereomveProduct = () => {
    cart.RemoveAllProductsFromCart(ProductDetail);
    toast.success("prosuct successfully removed ");
  };
  return (
    <>
      <NavBar />
      <div className="product-details">
        <h2 className="text-center mt-5" style={{ fontFamily: "" }}>
          Product Details
        </h2>
        <div className="d-flex justify-content-center">
          <hr className="product-details__hr" />
        </div>
        <div className="product-detailsItem">
          <div className="product-detailsItem__text">
            <p>
              <span
                style={{ color: "saddlebrown", fontFamily: "" }}
                className="fw-bolder me-3 fs-4 fw-bolder"
              >
                Product Name:
              </span>
              {ProductDetail.title}
            </p>
            <p className="">
              <span
                style={{ color: "saddlebrown", fontFamily: "Acme" }}
                className="fs-4 me-3"
              >
                Product Price:
              </span>
              {`${ProductDetail.price}$`}
            </p>
            <p className="">
              <span
                style={{ color: "saddlebrown", fontFamily: "Acme" }}
                className=" fs-4 me-3"
              >
                Product Description:
              </span>
              {`${ProductDetail.description}`}
            </p>
            <div>
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                value={3.5} // Default value (remove quotes)
                // edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>

            {productQuantity > 0 ? (
              <>
                <Form as={Row}>
                  <Form.Label
                    column="true"
                    className="d-block  fs-5"
                    style={{ fontFamily: "Acme" }}
                  >
                    {`(${productQuantity})`} Item In Cart
                    <Col className="d-flex gap-2 mt-3">
                      <Button
                        style={{
                          backgroundColor: "saddlebrown",
                          fontFamily: "Acme",
                        }}
                        className="border-0 handle-btn"
                        onClick={() => cart.AddProductToCart(ProductDetail)}
                      >
                        +
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "saddlebrown",
                          fontFamily: "Acme",
                        }}
                        className="border-0 handle-btn"
                        onClick={() =>
                          cart.RemoveProductFromCart(ProductDetail.id)
                        }
                      >
                        -
                      </Button>
                    </Col>
                  </Form.Label>
                </Form>
                <Button
                  style={{ backgroundColor: "saddlebrown", fontFamily: "Acme" }}
                  className="border-0 my-2 remove-btn"
                  onClick={handlereomveProduct}
                >
                  Remove From Cart
                </Button>
              </>
            ) : (
              <Button
                style={{ backgroundColor: "saddlebrown", fontFamily: "Acme" }}
                className="mt-3 border-0 addBtn"
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            )}
          </div>
          <div className="product-details__img">
            <img src={ProductDetail.image} alt="" className="p-3" />
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
export default CategoryDetails;
