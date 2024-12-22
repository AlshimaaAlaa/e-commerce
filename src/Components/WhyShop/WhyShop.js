import React from "react";
import { Row, Col } from "react-bootstrap";
import "./WhyShop.css";
function WhyShop() {
  return (
    <div>
      <div className="whyShop" id="whyShop">
        {/* <div className=''> */}
        <div>
          <img src="/images/Capture.PNG" className="mb-4 " alt="" />
          <h5 className="fw-bolder">Payment & Delivery</h5>
          <p className=" text-secondary ">Free shipping for orders over $50</p>
        </div>

        <div>
          <img src="/images/Capture1.PNG" className="mb-4 " alt="" />
          <h5 className="fw-bolder">Return & Refund</h5>
          <p className=" text-secondary ">Free 100% money back guarantee</p>
        </div>

        <div>
          <img src="/images/Capture2.PNG" className="mb-4 " alt="" />
          <h5 className="fw-bolder">Secure Payment</h5>
          <p className=" text-secondary ">100% secure payment</p>
        </div>

        <div>
          <img src="/images/Capture3.PNG" className="mb-4 " alt="" />
          <h5 className="fw-bolder">Quality Support</h5>
          <p className=" text-secondary ">Alway online feedback 24/7</p>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <hr className=" mt-5" style={{ width: "90%" }} />
      </div>
    </div>
  );
}
export default WhyShop;