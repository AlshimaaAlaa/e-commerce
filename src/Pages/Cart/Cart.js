import React, { useState } from 'react';
import "./style.css";
import { Button, Alert } from 'react-bootstrap';
import { useShoppingCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart=()=>{
  const {
    cartItems,
    AddProductToCart,
    RemoveProductFromCart,
    RemoveAllProductsFromCart,
    RemoveSelectedProduct,
  } = useShoppingCart();
  
  const [showMessage , setShowMessage] = useState(false);
  const handleDeleteSelectedProduct = (item)=>{
    RemoveSelectedProduct(item);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  // const [deleteMedssage , setShowDeleteMessage] = useState(false);
  const handleClearCart = (item)=>{
    RemoveAllProductsFromCart(item);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  return(
    <div className='cart'>
      {cartItems.length === 0 ? 
        <h1 className='mt-5 text-center'>Your Shopping Cart is Empty!!</h1>
        :
        <div className=''>
        <div className='cart__element mt-5'>
          <div className=' d-flex  justify-content-between'>
            <h3 style={{fontFamily:"Acme"}}>Shopping Cart</h3>
            <h3 style={{fontFamily:"Acme"}}>{`(${cartItems.length}) Items`}</h3>
          </div>
          <hr/>
          <div className=''>
            <ul className='list-unstyled cart-list mt-5' >
              {cartItems.map((item)=>(
                <li key={item.id} className='cart-list__items d-flex justify-content-between mb-5'>
                  <img className='product-image mt-3' src={item.image} alt='product img' width={'120px'} height={'120px'}/>
                  <div className='d-flex justify-content-center align-items-center '>
                    <Button className='me-2' onClick={()=>AddProductToCart(item)} variant='secondary' style={{fontFamily:"Acme"}}>+</Button>
                    <p className='mt-3 quantity' style={{fontFamily:"Acme"}}>{item.quantity}</p>
                    <Button className='ms-2' onClick={()=>RemoveProductFromCart(item.id)} variant='secondary'style={{fontFamily:"Acme"}}>-</Button>
                  </div>
                  <h4 className='mt-5 text-center price' style={{fontFamily:"Acme"}}>{`Price: ${item.price} $`}</h4>
                  <h4 className='mt-5 text-center price'  style={{fontFamily:"Acme"}}>{`Total: ${item.quantity * item.price.toFixed(2)}$`}</h4>
                  <div className='delete-div mt-1'>
                    <img src='/images/10147931.png' width={'30px'} height={'30px'} className='  cart-deleteProductBtn ' onClick={() =>handleDeleteSelectedProduct(item.id)} alt='' />
                  </div>
                  <hr/>
                </li>
              ))}
            </ul>
          </div>
          {/* <hr/> */}
          <h3 className='mt-5 price' style={{fontFamily:"Acme"}}>{`Totla Price: ${totalPrice}$`}</h3>
          <div className='d-flex flex-column '>
            <Button className='fs-5 mt-5' style={{fontFamily:"Acme"}} variant='success' >Checkout</Button>
            <Button className='fs-5 mt-3'  style={{fontFamily:"Acme"}} variant='danger' onClick={handleClearCart}>Clear Cart</Button>
          </div>
          <p className='contiune-shopping fs-5 mt-5' style={{fontFamily:"Acme"}}><Link to={'/AllProducts'}><img src='/images/3183354.png' className='mb-3 me-2' width={'40px'} alt=''/> Contiune Shopping</Link></p>
        </div>
      </div>
      }
      {showMessage && (
        <Alert variant="danger" className="alert-deletemessage fs-5" style={{ maxWidth: '360px', fontFamily: "Acme" }}>
          Product successfully deleted from cart
        </Alert>
      )}
    </div>
  )
}
export default Cart;
