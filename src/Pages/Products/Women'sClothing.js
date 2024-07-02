import React, { useEffect, useState } from 'react';
import "./CategoriesStyle.css";
import ReactStars from "react-rating-stars-component";
import { Button ,Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
function WomenClothing() {
  const [WomenClothing , setWomenClothing] =  useState([]);
  useEffect(()=>{
    async function fetchEectronics(){
      const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const data = await response.json();
      setWomenClothing(data);
    }
    fetchEectronics();
  },[]);
  
  const cart = useContext(CartContext);
  const [showMessage , setShowMessage] =  useState(false);
  const handleAddToCart = (product)=>{
    cart.AddProductToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }
  return (
    <div className='WomenClothingContainer'>
      <ul className='WomenClothingList list-unstyled'>
        {WomenClothing.map((item)=>(
          <li key={item.id} className='WomenClothingList__items'>
            <div className='containers'>
            <div className='WomenClothingsContainer__img'>
              <img src={item.image} alt='womenClothes'/>
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
                        // onClick={()=>cart.AddProductToWishlist(product)}
                      >
                        <img
                          src="/images/download (3).png " alt='wishlist'
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
                        onClick={handleAddToCart}
                      >
                        <img
                          src="/images/3523885.png" alt='cart'
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
                        <Link to={`/WomenClothing/${item.id}`}>
                          <img
                            src="/images/download (6).png" alt=''
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
                  <h5 className='mt-3'>{item.title.slice(0,20)}</h5>
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
                  <p className='fw-bolder'>{`${item.price} $`}</p>
                </div>

          </li>
        ))}
      </ul> 
      {showMessage && (
        <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px' ,fontFamily:"Acme" }}>
          Product successfully added to cart
        </Alert>
      )}
    </div>
  )
}

export default WomenClothing;