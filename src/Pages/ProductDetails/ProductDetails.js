import React, { useEffect, useState } from 'react';
import "./style.css";
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Button, Row, Col, Form, Alert } from 'react-bootstrap';

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [showMessage, setShowMessage] = useState(false); 
  const [deleteItem , setDeleteItem] = useState(false);
  const { id } = useParams();
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://products-blush-phi.vercel.app/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    cart.AddProductToCart(product);
    setShowMessage(true); 
    setTimeout(() => {
      setShowMessage(false); 
    }, 3000);
  };

  const handleDeleteProduct = (product)=>{
    cart.RemoveAllProductsFromCart(product);
    setDeleteItem(true);
    setTimeout(() => {
      setDeleteItem(false);
    }, 3000);
  }
  if (product.length === 0) {
    return <div>No product details available.</div>;
  }

  return (
    <div className='product-details'>
      <h1 className='text-center mt-5'>Product Details</h1>
      <div className='d-flex justify-content-center'>
        <hr className='product-details__hr'/>
      </div>
      <div className='product-detailsItem'>
        <div className='product-details__img'>
          <img src={product.image} alt='product-img'/>
        </div>
        <div className='product-detailsItem__text'>
          <h4>
            <span style={{color:"saddlebrown"}} className='fw-bolder me-3'>Product Name:</span>
            {product.title}
          </h4>
          <p className='fw-bolder'>
            <span style={{color:"saddlebrown" , fontFamily:"Acme"}} className='fw-bolder fs-4 me-3'>
              Product Price:
            </span>
            {`${product.price}$`}
          </p>
          <p className='fw-bolder'>
            <span style={{color:"saddlebrown" }} className='fw-bolder fs-4 me-3'>
              Product Description:
            </span>
            {`${product.description}`}
          </p>
          <div>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={5} // Default value (remove quotes)
              // edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>

          {productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" className='d-block fw-bolder fs-5' style={{fontFamily:"Acme"}}>{`(${productQuantity})`} Item In Cart 
                  <Col className='d-flex gap-2 mt-3'> 
                    <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='border-0 handle-btn' onClick={() => cart.AddProductToCart(product)}>+</Button>
                    <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='border-0 handle-btn' onClick={() => cart.RemoveProductFromCart(product.id)}>-</Button>
                  </Col>
                </Form.Label>
              </Form>
              <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='border-0 my-2 remove-btn' onClick={() => handleDeleteProduct(product)}>Remove From Cart</Button>
            </>
          ) : (
            <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='mt-3 border-0 addBtn' onClick={handleAddToCart}>Add To Cart</Button>
          )}
        </div>
      </div>

      {showMessage && (
        <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px' ,fontFamily:"Acme"}}>
          Product successfully added to cart
        </Alert>
      )}
      {deleteItem && (
        <Alert variant="danger" className="alert-deletemessage fs-5" style={{ maxWidth: '340px' ,fontFamily:"Acme"}}>
          Product successfully deleted from cart
        </Alert>
      )}
    </div>
  );
}

export default ProductDetails;
