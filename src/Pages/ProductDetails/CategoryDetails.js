import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import "./style.css";
import { Button ,Row , Col ,Form} from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
function CategoryDetails() {

  const {id} = useParams();
  const [ProductDetail , setProductDetails] = useState([]);
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(ProductDetail);
  useEffect(()=>{
    async function fetchDetails(){
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    }
    fetchDetails();
  },[id])
  return (
    <div className='product-details'>
      <h1 className='text-center mt-5'>Product Details</h1>
      <div className='d-flex justify-content-center'>
        <hr className='product-details__hr'/>
      </div>
      <div className='product-detailsItem'>
      <div className='product-details__img'>
        <img src={ProductDetail.image}/>
      </div>
      <div className='product-detailsItem__text'>
        <h4>
          <span style={{color:"saddlebrown"}} className='fw-bolder me-3'>Product Name:</span>
          {ProductDetail.title}
        </h4>
        <p className='fw-bolder'>
          <span style={{color:"saddlebrown" , fontFamily:"Acme"}} className='fw-bolder fs-4 me-3'>
            Product Price:
          </span>
            {`${ProductDetail.price}$`}
        </p>
        <p className='fw-bolder'>
          <span style={{color:"saddlebrown" , fontFamily:"Acme"}} className='fw-bolder fs-4 me-3'>
            Product Description:
          </span>
            {`${ProductDetail.description}`}
        </p>
        <div>
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            value={3.5} // Default value (remove quotes)
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
                <Form.Label column="true" className='d-block fw-bolder fs-5' style={{fontFamily:"Acme"}}>{`(${''})`} Item In Cart 
                  <Col className='d-flex gap-2 mt-3'> 
                    <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='border-0 handle-btn' >+</Button>
                    <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='border-0 handle-btn' >-</Button>
                  </Col>
                </Form.Label>
              </Form>
              <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='border-0 my-2 remove-btn'>Remove From Cart</Button>
            </>
          ) : (
            <Button style={{backgroundColor:"saddlebrown", fontFamily:"Acme"}} className='mt-3 border-0 addBtn'>Add To Cart</Button>
          )}
      </div>
      </div>
    </div>
  )
}

export default CategoryDetails;