import React from "react";
import './Blog.css'
import "bootstrap/dist/css/bootstrap.min.css";
function Blog() {
  return (
    <div className="blogContainer">
      <div className="">
        <h3
          style={{ fontFamily: "Acme", marginBottom: "10px" }}
          className="fw-bolder mt-3 text-center"
        >
          New Blog Posts
        </h3>
        <p
          style={{ fontFamily: "Philosopher" }}
          className="text-secondary mb-5 blog__p text-center"
        >
          Donec nec justo eget felis facilisis fermentum.
        </p>

        <div className="blog-items">
          <div>
            <img
              src="/images/post_1_d0e46a9d50.jpg"
              className="blog__img"
              alt="blog-img1"
            />
            <div className="">
              <p className="text-secondary mt-3 mb-0">
                Sep 18, 2024 , 3 Comments
              </p>
              <h5 className="mt-1  h5">Sed adipiscingv ornare</h5>
            </div>
          </div>
          <div>
            <img
              src="/images/post_2_47432011a6.jpg"
              className="blog__img"
              alt="blog-img2"
            />
            <div className="">
              <p className=" mt-3 mb-0">May 28, 2024 , 3 Comments</p>
              <h5 className="mt-1  h5">
                Aenean disgnissim pellentesqvsdue felis
              </h5>
            </div>
          </div>
          <div>
            <img
              src="/images/post_3_5bff6a6c44.jpg"
              className="blog__img"
              alt="blog-img3"
            />
            <div className="d-flex flex-column align-items-start blog__text">
              <p className=" mt-3 mb-0">May 28, 2024 , 3 Comments</p>
              <h5 className="mt-1  h5">Quisque volutpat msdfasttis eros.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;