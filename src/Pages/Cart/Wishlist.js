import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Wishlist = () => {
  const { wishlistItems, Clearwishlist } = useShoppingCart();

  const handleClearCart = (item) => {
    Clearwishlist(item);
    toast.success("All products cleared form your wishlist !");
  };

  return (
    <>
      <NavBar />
      <div className="cart">
        {wishlistItems.length === 0 ? (
          <h2 className="text-center" style={{ margin: "100px 0px 100px 0px" }}>
            Your Wishlist is Empty!!
          </h2>
        ) : (
          <div className="wishlistContainer">
            <div className="cart__element mt-5">
              <h3 className="text-center" style={{ fontFamily: "Acme" }}>
                Your wishlist
                <span className="ms-2 me-2">
                  [ {`${wishlistItems.length}`} items]
                </span>
              </h3>
              <div
                className=""
                style={{ marginTop: "80px", fontFamily: "Acme" }}
              >
                <table className="table w-75 m-auto">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems.map((item) => (
                      <tr>
                        <td>
                          <img
                            className=" p-3"
                            src={item.image}
                            alt="productimage"
                            width={"150px"}
                          />
                        </td>
                        <td>{item.price} EGP</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center mt-5 ">
                <Button
                  className="fs-5 mt-3"
                  style={{ fontFamily: "Acme", width: "350px" }}
                  variant="danger"
                  onClick={handleClearCart}
                >
                  Clear Wishlist
                </Button>
              </div>
              <p
                className="contiune-shopping mt-5 "
                style={{ fontFamily: "Acme" }}
              >
                <Link to={"/AllProducts"}>
                  <img
                    src="/images/3183354.png"
                    className="mb-2 me-2 ms-4"
                    width={"30px"}
                    alt=""
                  />
                  Contiune Shopping
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};
export default Wishlist;