import React, { useEffect, useState } from 'react';
import "./ProductsStyle.css";
import ReactStars from "react-rating-stars-component";
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const cart = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://products-blush-phi.vercel.app/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    cart.AddProductToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div>
      <div className='AllproductsContainer'>
        <h1 className='text-center Our Products mt-5'>Our Products</h1>
        <hr className='AllproductsContainer__hr'/>
        <div className='home-productsItems mt-5'>
          <ul className='AllproductsContainer__innerItems'>
            {products.map((product, index) => (
              <div className='card' key={index}>
                <li className='home-productCard__list'>
                  <div className='containers'>
                    <div className='Allproduct-img d-flex justify-content-center align-items-center'>
                      <img src={product.image} alt='product-img '/>
                    </div>
                    <div className="overlay">
                      <div className="text">
                        <Button
                          style={{
                            width: "3rem",
                            height: "2.5rem",
                            position: "relative"
                          }}
                          variant="outline-none"
                          className="details-btn "
                          onClick={()=>cart.AddProductToWishlist(product)}
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
                            position: "relative"
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
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          <Link to={`/AllProducts/${product.id}`} className="product-details-link">
                            <img
                              src="/images/download (6).png"
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                textAlign: "center"
                              }}
                              alt="Product Details"
                            />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className='p-3'>
                    {product.title && (
                      <>
                        <h5 className='mt-3'>{product.title.slice(0, 20)}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          isHalf={true}
                          value={3} // Assuming this should be a number
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                        />
                        <p>{`${product.price} $`}</p>
                      </>
                    )}
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Pop-up message */}
      {showMessage && (
        <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px', fontFamily:"Acme" }}>
          Product successfully added to cart
        </Alert>
      )}
    </div>
  );
}

export default AllProducts;
