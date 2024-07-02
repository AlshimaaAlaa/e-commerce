import React, { useEffect, useState } from 'react';
import "./CategoriesStyle.css";
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Jewelery() {
  const [jewelery , setJewelery] =  useState([]);
  useEffect(()=>{
    async function fetchEectronics(){
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
      const data = await response.json();
      setJewelery(data);
    }
    fetchEectronics();
  });

  return (
    <div className='jewelerysContainer'>
      <ul className='jeweleryList list-unstyled'>
        {jewelery.map((item)=>(
          <li key={item.id} className='jeweleryList__items'>
            <div className='containers'>
            <div className='jewelerysContainer__img'>
              <img src={item.image}/>
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
                        // onClick={() =>handleAddToCart(product)} 
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
                        <Link to={`/Jewelery/${item.id}`}>
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
    </div>
  )
}

export default Jewelery;