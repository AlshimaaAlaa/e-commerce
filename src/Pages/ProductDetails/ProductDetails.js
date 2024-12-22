import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button, Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  // const [deleteItem, setDeleteItem] = useState(false);
  const { id } = useParams();
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios({
          url: `https://products-blush-phi.vercel.app/products/${id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          setProduct(response.data);
        } else {
          console.error("an error ocurred!");
        }
      } catch (error) {
        console.error("An error ocurred !", error);
      }
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    cart.AddProductToCart(product);
    toast.success("prosuct successfully added to cart");
  };

  const handleDeleteProduct = (product) => {
    cart.RemoveAllProductsFromCart(product);
    toast.success("prosuct successfully removed ");
  };
  if (product.length === 0) {
    return <div>No product details available.</div>;
  }

  return (
    <>
      <NavBar />
      <div className="product-details">
        <h1 className="text-center mt-5">Product Details</h1>
        <div className="d-flex justify-content-center">
          <hr className="product-details__hr" />
        </div>
        <div className="product-detailsItem">
          {/* <div className="product-details__img">
            <img src={product.image} alt="product-img" />
          </div> */}
          <div className="product-detailsItem__text">
            <h4>
              <span style={{ color: "saddlebrown" }} className="fw-bolder me-3">
                Product Name:
              </span>
              {product.title}
            </h4>
            <p className="fw-bolder">
              <span
                style={{ color: "saddlebrown", fontFamily: "Acme" }}
                className="fw-bolder fs-4 me-3"
              >
                Product Price:
              </span>
              {`${product.price}$`}
            </p>
            <p className="fw-bolder">
              <span
                style={{ color: "saddlebrown" }}
                className="fw-bolder fs-4 me-3"
              >
                Product Description:
              </span>
              {`${product.description}`}
            </p>
            <div>
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                value={5} // Default value (remove quotes)
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
                    className="d-block fw-bolder fs-5"
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
                        onClick={() => cart.AddProductToCart(product)}
                      >
                        +
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "saddlebrown",
                          fontFamily: "Acme",
                        }}
                        className="border-0 handle-btn"
                        onClick={() => cart.RemoveProductFromCart(product.id)}
                      >
                        -
                      </Button>
                    </Col>
                  </Form.Label>
                </Form>
                <Button
                  style={{ backgroundColor: "saddlebrown", fontFamily: "Acme" }}
                  className="border-0 my-2 remove-btn"
                  onClick={() => handleDeleteProduct(product)}
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
            <img src={product.image} alt="product-img" className="p-3" />
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
export default ProductDetails;
