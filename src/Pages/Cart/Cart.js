import React, { useState } from 'react';
import "./style.css";
import { Button, Alert } from 'react-bootstrap';
import { useShoppingCart } from '../../Context/CartContext';

const Cart = () => {
  const {
    cartItems,
    AddProductToCart,
    RemoveProductFromCart,
    RemoveAllProductsFromCart,
    RemoveSelectedProduct,
  } = useShoppingCart();

  console.log("cartItems:", cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const [deleteItem, setDeleteItem] = useState(false);

  const handleDeleteProduct = (product) => {
    RemoveAllProductsFromCart(product);
    setDeleteItem(true);
    setTimeout(() => {
      setDeleteItem(false);
    }, 3000);
  }
  
  const [deleteSelctedItem , setDeleteSelctedItem] = useState(false);
  const handleDeleteSelectedProduct = (product) => {
    RemoveSelectedProduct(product);
    setDeleteSelctedItem(true);
    setTimeout(() => {
      setDeleteSelctedItem(false);
    }, 3000);
  }

  const handleCheckout = () => {
    alert('Checkout completed!');
    RemoveAllProductsFromCart();
  };

  return (
    <div className='cart'>
      {cartItems.length === 0 ?
        <h1 className='text-center mt-5'>Your Cart is Empty!!</h1>
        :
        <>
          <div>
            <h1 className='text-center mt-4'>Your Cart!</h1>
            <div className='d-flex justify-content-center'>
              <hr className='cart__hr' />
            </div>
          </div>
          <ul className='list-unstyled cart-list mt-5'>
            {cartItems.map((item) => (
              <li key={item.id} className='cart-list__items d-flex mb-3'>
                <div className='cartProduct-image'>
                  <img src={item.image} alt='product-img' className='me-5' />
                </div>
                <div className='cart-text'>
                  <h4 className='' style={{ fontFamily: "Acme" }}>
                    {item.title.slice(0, 20)}
                  </h4>
                  <div className='d-flex'>
                    <h5 className=''>{`${item.quantity}X`}</h5><h5 className='ms-2'>{`${item.price}`} $</h5>
                  </div>
                  <div className='mt-4 cart-buttons'>
                    <Button variant='light' onClick={() => AddProductToCart(item)} style={{ fontFamily: "Acme" }} className='border-0 cart-btn fs-5'>+</Button>
                    <Button variant='light' onClick={() => RemoveProductFromCart(item.id)} style={{ fontFamily: "" }} className='fw-bolder border-0 ms-3 cart-btn fs-5'>-</Button>
                    <div className='delete-div'>
                      <img src='/images/4041994.png' width={'30px'} height={'30px'} className='cart-deleteProductBtn' onClick={() =>handleDeleteSelectedProduct(item.id)} />
                    </div>
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
          <div className='cart-clearcheckout'>
            <h3 style={{ fontFamily: "Acme" }} className='mt-2'>Total Price: {totalPrice.toFixed(2)} $</h3>
            <Button variant='success' style={{ fontFamily: "Acme" }} className='fs-5 mt-4' onClick={handleCheckout}>Check Out</Button>
            <Button style={{ fontFamily: "Acme" }} variant='danger' className='fs-5 mt-3' onClick={handleDeleteProduct}>Clear Cart!</Button>
          </div>
        </>
      }
      {deleteItem && (
        <Alert variant="danger" className="alert-deletemessage fs-5" style={{ maxWidth: '360px', fontFamily: "Acme" }}>
          Products successfully deleted from cart
        </Alert>
      )}
      
      {deleteSelctedItem && (
        <Alert variant="danger" className="alert-deletemessage fs-5" style={{ maxWidth: '360px', fontFamily: "Acme" }}>
          Product successfully deleted from cart
        </Alert>
      )}

    </div>
  );
}

export default Cart;
