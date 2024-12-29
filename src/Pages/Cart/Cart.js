import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const {
    cartItems,
    AddProductToCart,
    RemoveProductFromCart,
    RemoveAllProductsFromCart,
    RemoveSelectedProduct,
  } = useShoppingCart();

  const handleDeleteSelectedProduct = (item) => {
    RemoveSelectedProduct(item);
    toast.success("Product successfully deleted from cart");
  };

  const handleClearCart = (item) => {
    RemoveAllProductsFromCart(item);
    toast.success("All products cleared form your cart !");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <NavBar />
      <div className="cart">
        {cartItems.length === 0 ? (
          <h2 className="text-center" style={{ margin: "100px 0px 100px 0px" }}>
            Your Shopping Cart is Empty !!
          </h2>
        ) : (
          <div className="cartContainer">
            <div className="cart__element mt-5">
              <h3 className="text-center" style={{ fontFamily: "Acme" }}>
                Your cart [
                <span className="ms-2 me-2">{`${cartItems.length}`} </span>
                items ]
              </h3>
              <div
                className=""
                style={{ fontFamily: "Acme", marginTop: "80px" }}
              >
                <table className="table w-75 m-auto">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr className="">
                        <td className="cart-list__items">
                          <img
                            src={item.image}
                            alt=""
                            width={"150px"}
                            className="p-3"
                          />
                        </td>
                        <td>{item.price} EGP </td>
                        <td className="">
                          <div className="d-flex  align-items-center ">
                            <Button
                              className="me-2"
                              onClick={() => AddProductToCart(item)}
                              style={{
                                fontFamily: "Acme",
                                backgroundColor: "saddlebrown",
                                border: "0px",
                              }}
                            >
                              +
                            </Button>
                            <p
                              className="mt-3 quantity"
                              style={{ fontFamily: "Acme" }}
                            >
                              {item.quantity}
                            </p>
                            <Button
                              className="ms-2"
                              onClick={() => RemoveProductFromCart(item.id)}
                              style={{
                                fontFamily: "Acme",
                                backgroundColor: "saddlebrown",
                                border: "0px",
                              }}
                            >
                              -
                            </Button>
                          </div>
                        </td>
                        <td className="d- align-items-center">
                          <div className="d-flex align-items-center">
                            {`${item.quantity * item.price.toFixed(2)} EGP`}
                            <img
                              src="/images/10147931.png"
                              width={"20px"}
                              height={"20px"}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleDeleteSelectedProduct(item.id)
                              }
                              alt=""
                              className="mb-1 ms-2 me-2"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex flex-column justify-content-end align-items-end p-5">
                <div className="d-flex justify-content-between align-items-center w-25 mt-5">
                  <p className="fw-bolder fs-4">SubTotal :</p>
                  <p className="fs-5">{totalPrice} EGP</p>
                </div>
                <div>
                  <Button
                    className="fs-5 mt-5"
                    style={{
                      fontFamily: "Acme",
                      backgroundColor: "saddlebrown",
                      border: "0px",
                      width: "350px",
                    }}
                  >
                    Checkout
                  </Button>
                </div>
                <div>
                  <Button
                    className="fs-5 mt-3"
                    style={{ fontFamily: "Acme", width: "350px" }}
                    variant="danger"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
              <div>
                <p
                  className="contiune-shopping ms-5 "
                  style={{ fontFamily: "Acme" }}
                >
                  <Link to={"/AllProducts"}>
                    <img
                      src="/images/3183354.png"
                      className="mb-3 me-2"
                      width={"40px"}
                      alt=""
                    />
                    Contiune Shopping
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};
export default Cart;