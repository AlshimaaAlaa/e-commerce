import React, { useState } from 'react';
import "./style.css";
import { Button, Alert } from 'react-bootstrap';
import { useShoppingCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Wishlist=()=>{
  const {
    wishlistItems,
    RemoveProductFromWishlist,
    Clearwishlist,
  } = useShoppingCart();
  
  const [showMessage , setShowMessage] = useState(false);
  const handleDeleteSelectedProduct = (item)=>{
    RemoveProductFromWishlist(item);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  const [deleteMedssage , setShowDeleteMessage] = useState(false);
  const handleClearCart = (item)=>{
    Clearwishlist(item);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  
  return(
    <div className='cart'>
      {wishlistItems.length === 0 ? 
        <h1 className='mt-5 text-center'>Your Wishlist is Empty!!</h1>
        :
        <div className=''>
        <div className='cart__element mt-5'>
          <div className=' d-flex  justify-content-between'>
            <h3 style={{fontFamily:"Acme"}}>Wishlist</h3>
            <h3 style={{fontFamily:"Acme"}}>{`(${wishlistItems.length}) Items`}</h3>
          </div>
          <hr/>
          <div className=''>
            <ul className='list-unstyled cart-list mt-5' >
              {wishlistItems.map((item)=>(
                <li key={item.id} className='cart-list__items d-flex justify-content-between mb-5'>
                  <img className='product-image mt-3' src={item.image} alt='product-image' width={'120px'} height={'120px'}/>
                  <div className='d-flex justify-content-center align-items-center '>
                    <h5 className='mt-0 quantity' style={{fontFamily:"Acme"}}>{`Quantity: ${item.quantity}`}</h5>
                  </div>
                  <h5 className='mt-5 text-center price' style={{fontFamily:"Acme"}}>{`Price: ${item.price} $`}</h5>
                  <div className='delete-div mt-1'>
                    <img src='/images/10147931.png' width={'30px'} height={'30px'} className='  cart-deleteProductBtn ' onClick={() =>handleDeleteSelectedProduct(item.id)} />
                  </div>
                  <hr/>
                </li>
              ))}
            </ul>
          </div>
          <div className='d-flex flex-column '>
            <Button className='fs-5 mt-3'  style={{fontFamily:"Acme"}} variant='danger' onClick={handleClearCart}>Clear Wishlist</Button>
          </div>
          <p className='contiune-shopping fs-5 mt-5' style={{fontFamily:"Acme"}}><Link to={'/AllProducts'}><img src='/images/3183354.png' className='mb-3 me-2' width={'40px'}/> Contiune Shopping</Link></p>
        </div>
      </div>
      }
      {showMessage && (
        <Alert variant="danger" className="alert-deletemessage fs-5" style={{ maxWidth: '380px', fontFamily: "Acme" }}>
          Products successfully deleted from wishlist
        </Alert>
      )}
    </div>
  )
}
export default Wishlist;