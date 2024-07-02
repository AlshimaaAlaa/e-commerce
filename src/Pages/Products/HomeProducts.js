// HomeProducts.js
import React, { useEffect, useState } from 'react';
import "./ProductsStyle.css";
import ReactStars from "react-rating-stars-component";
import { Button , Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [showMessage , setShowMessage] =  useState(false);
  const limitProducts = products.slice(0,8);
  const cart = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
        const response = await fetch('https://products-blush-phi.vercel.app/products');
        const data = await response.json();
        setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product)=>{
    cart.AddProductToCart(product)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000);
  }

  return (
    <div className='container home-productsContainer'>
      <h1 className='text-center mb-4 mt-4'>Shop The Collection</h1>
      <p className='text-center text-secondary'>Donec nec justo eget felis facilisis fermentum.
      <br/>Aliquam porttitor mauris sit amet orci..</p>
      <div className='categories mt-5 mb-5'>
        <Button className='categories__btn'>
          <Link to={'/Eectronics'} className='link fs-5 ' style={{fontFamily:'Acme'}}>Electronics</Link>
        </Button>

        <Button className='categories__btn ' >
          <Link to={'/Jewelery'} className='link fs-5' style={{fontFamily:'Acme'}}>Jewelery</Link>
        </Button>

        <Button className='categories__btn '>
          <Link to={'/MenClothing'} className='link fs-5' style={{fontFamily:'Acme'}}>Men's clothing</Link>
        </Button>

        <Button  className='categories__btn '>
          <Link to={'/WomenClothing'} className='link fs-5' style={{fontFamily:'Acme'}}>Women's clothing</Link>
        </Button>
      </div>

      <div className='home-productsItems mt-5'>
        <ul className='innerItems'>
          {limitProducts.map((product, index) => (
            <div className='home-productCard' key={index}>
              <li className='home-productCard__list'>
                <div className='containers'>
                  <div className='product-img d-flex justify-content-center align-items-center'>
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
                        />
                      </Button>
                      <Button
                        style={{
                          width: "3rem",
                          height: "2.5rem",
                          position: "relative"
                        }}
                        variant="outline-none"
                        className="details-btn "
                        onClick={() =>handleAddToCart(product)} 
                      >
                        <img
                          src="/images/3523885.png"
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
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        <Link to={`AllProducts/${product.id}`}>
                          <img
                            src="/images/download (6).png"
                            style={{
                              width: "1.5rem",
                              height: "1.5rem",
                              textAlign: "center"
                            }}
                          />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='p-3'>
                  <h5 className='mt-3'>{product.title.slice(0,20)}</h5>
                  {/* <p>{`${product.price} $`}</p> */}
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    value={"3"} // is a default value
                    // edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <p className=''>{`${product.price} $`}</p>
                </div>
                
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className='d-flex flex-column align-items-center justify-content-center mt-3'>
        <button className='all'>
          <Link to={"/AllProducts"} className='displayAll'>
            Show All Products
          </Link>
        </button>
      </div>
      
      {/* Pop-up message */}
      {showMessage && (
        <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px' ,fontFamily:"Acme" }}>
          Product successfully added to cart
        </Alert>
      )}
    </div>
  );
}

export default HomeProducts;
