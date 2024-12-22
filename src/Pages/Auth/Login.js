import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";
function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("An Error Ocurred when try to log in !");
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const intialValues = {
    username: "",
    password: "",
  };
  const vaildationShema = Yup.object({
    username: Yup.string().required("please enter your user name !"),
    password: Yup.string().required("please enter your correct password !"),
  });
  const handleSubmit = async (value) => {
    setLoading(true);
    const items = {
      username: value["username"],
      password: value["password"],
    };

    try {
      const response = await axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: items,
      });

      console.log("Login successful:", response.data);

      if (response.data.token) {
        setLoading(false);
        console.log("Token received:", response.data.token);
        setShowModal(true);
        setTimeout(() => {
          navigate("/Home");
        }, 15000);
      } else {
        console.error("Unexpected response format:", response.data);
        setLoading(false);
        setError(error);
        setShowModal(false);
        setShowModalError(true);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      setShowModal(false);
      setShowModalError(true);
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="loginContainer">
      <div className="overlay"></div>
      <div className="loginForm">
        <Formik
          initialValues={intialValues}
          validationSchema={vaildationShema}
          onSubmit={handleSubmit}
        >
          <Form className="login">
            <div>
              <label
                className="d-block mb-2 text-secondary fw-bolder"
                htmlFor="name"
              >
                User Name
              </label>
              <Field name="username" id="name" />
              <ErrorMessage
                component={"div"}
                name="username"
                className="error-message"
              />
            </div>
            <div className="position-relative">
              <label
                htmlFor="pass"
                className="d-block mb-2 text-secondary mt-4 fw-bolder"
              >
                Password
              </label>
              <Field
                name="password"
                id="pass"
                type={show ? "text" : "password"}
              />
              <span
                className="position-absolute"
                onClick={() => setShow(!show)}
                style={{ cursor: "pointer", top: "43px", right: "20px" }}
              >
                {!show ? (
                  <img src="/images/close eye.png" alt="" width={"20px"} />
                ) : (
                  <img src="/images/open eye.png" alt="" width={"20px"} />
                )}
              </span>
              <ErrorMessage
                component={"div"}
                name="password"
                className="error-message"
              />
            </div>
            <div className="text-center">
              <button className="loginBtn mt-4" type="submit">
                {loading ? "loading..." : "login"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <Modal isOpen={showModal}>
        <div style={{ padding: "30px" }}>
          <div className="text-center">
            <img
              src="/images/success.png"
              className="mt-3"
              alt=""
              width={"100px"}
            />
          </div>
          <div>
            <p className="'text-center fs-4 mt-3">
              You Logged in successfully!
            </p>
          </div>
        </div>
      </Modal>
      <Modal isOpen={showModalError}>
        <div style={{ padding: "20px" }}>
          <div className="d-flex justify-content-end">
            <button
              className="fw-bolder fs-5 "
              style={{ background: "transparent", border: "none" }}
              onClick={() => setShowModalError(false)}
            >
              X
            </button>
          </div>
          <div className="text-center">
            <img
              src="/images/failed.png"
              className="mt-2"
              alt=""
              width={"100px"}
            />
          </div>
          <div>
            <p className="'text-center  fs-5 mt-3">
              please enter correct username or password !
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default Login;