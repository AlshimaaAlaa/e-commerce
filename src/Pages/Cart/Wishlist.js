import React, { useContext, useState } from 'react';
import { useShoppingCart } from '../../Context/CartContext';
import "./style.css";
import { Alert, Button } from 'react-bootstrap';
function Wishlist() {
  const {
    wishlistItems,
    AddProductToWishlist,
    RemoveProductFromWishlist,
    Clearwishlist,
    } = useShoppingCart();
  
  const [showMessage , setShowMessage] = useState(false);
  const handleClearWishList = ()=> {
    Clearwishlist();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false)
    }, 3000);
  }
  return (
    <div className='wishlistContainer'>
      {wishlistItems.length === 0 ?
      <>
      <h1 className='mt-5 text-center'>Your Wishlist is Empty!!</h1>
      <div className='d-flex justify-content-center'>
        <hr className='cart__hr' />
      </div>
      </>
      
        :
        <div className='wishlist-items'>
          <h1 className='mt-5 text-center'>Your Wishlist</h1>
          <div className='d-flex justify-content-center'>
              <hr className='cart__hr' />
          </div>
          <ul className='list-unstyled wishlist-list'>
            {wishlistItems.map((item)=>(
              <li key={item.id} className='wishlist-list__items mb-3 '>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <div className='wishlist-img'>
                      <img src={item.image}/>
                    </div>
                    <div>
                      <h4 className='mt-3'>{item.title.slice(0,20)}</h4>
                    </div>
                  </div>
                  <div className=''>
                    <img src='/images/4041994.png' width={'30px'} height={'30px'} className='clear-img' onClick={()=>RemoveProductFromWishlist(item.id)} />
                  </div>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      }
      {wishlistItems.length === 0 ?
      <></>
      :
      <div className='clear'>
        <Button variant='danger' style={{ fontFamily: "Acme" }} className='fs-5 mt-4' onClick={handleClearWishList}>Clear Wishlist!</Button>
      </div>
      }

      {showMessage &&
        <Alert variant="danger" className="alert-deletemessage fs-5"  style={{ maxWidth: '360px', fontFamily: "Acme" }}>
          Wishlist successfully Cleared.
        </Alert>
      }
    </div>
  );
}

export default Wishlist;
