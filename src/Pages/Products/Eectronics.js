// import React, { useEffect, useState } from 'react';
// import "./CategoriesStyle.css";
// import ReactStars from "react-rating-stars-component";
// import { Alert, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';

// function Eectronics() {
//   const [electronics , setElectronics] =  useState([]);
//   useEffect(()=>{
//     async function fetchEectronics(){
//       const response = await fetch('https://fakestoreapi.com/products/category/electronics');
//       const data = await response.json();
//       setElectronics(data);
//     }
//     fetchEectronics();
//   },[]);
//   const cart =  useContext(CartContext);
//   const [showMessage , setShowMessage]= useState(false)
//   const handleAddToCart = (item)=>{
//     cart.AddProductToCart(item);
//     setShowMessage(true);
//     setTimeout(() => {
//       setShowMessage(false);
//     }, 3000);
//   }

//   const [showWishMessage , setShowWishMessage]= useState(false)
//   const handleAddToWishlist = (item)=>{
//     cart.AddProductToWishlist(item);
//     setShowWishMessage(true);
//     setTimeout(() => {
//       setShowWishMessage(false);
//     }, 3000);
//   }
//   return (
//     <div className='electronicsContainer'>
//       <ul className='electronicList list-unstyled'>
//         {electronics.map((item)=>(
//           <li key={item.id} className='electronicList__items'>
//             <div className='containers'>
//             <div className='electronicsContainer__img'>
//               <img src={item.image}/>
//             </div>
//             <div className="overlay">
//                     <div className="text">
//                     <Button
//                         style={{
//                           width: "3rem",
//                           height: "2.5rem",
//                           position: "relative"
//                         }}
//                         variant="outline-none"
//                         className="details-btn "
//                         onClick={handleAddToWishlist}
//                       >
//                         <img
//                           src="/images/download (3).png"
//                           style={{
//                             width: "1.5rem",
//                             height: "1.5rem",
//                           }}
//                         />
//                       </Button>
//                       <Button
//                         style={{
//                           width: "3rem",
//                           height: "2.5rem",
//                           position: "relative"
//                         }}
//                         variant="outline-none"
//                         className="details-btn "
//                         onClick={() =>handleAddToCart(item)} 
//                       >
//                         <img
//                           src="/images/3523885.png"
//                           style={{
//                             width: "1.5rem",
//                             height: "1.5rem",
//                           }}
//                         />
//                       </Button>
//                       <Button
//                         style={{
//                           width: "3rem",
//                           height: "2.5rem",
//                           position: "relative",
//                         }}
//                         variant="outline-none"
//                         className="details-btn "
//                         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                       >
//                         <Link to={`/Eectronics/${item.id}`}>
//                           <img
//                             src="/images/download (6).png"
//                             style={{
//                               width: "1.5rem",
//                               height: "1.5rem",
//                               textAlign: "center"
//                             }}
//                           />
//                         </Link>
//                       </Button>
//                     </div>
//                   </div>
//                   </div>
//                   <div className='p-3'>
//                   <h5 className='mt-3'>{item.title.slice(0,20)}</h5>
//                   <ReactStars
//                     count={5}
//                     size={24}
//                     isHalf={true}
//                     value={"3"} // is a default value
//                     // edit={false}
//                     emptyIcon={<i className="far fa-star"></i>}
//                     halfIcon={<i className="fa fa-star-half-alt"></i>}
//                     fullIcon={<i className="fa fa-star"></i>}
//                     activeColor="#ffd700"
//                   />
//                   <p className='fw-bolder'>{`${item.price} $`}</p>
//                 </div>

//           </li>
//         ))}
//       </ul> 
//       {showMessage && (
//         <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px' ,fontFamily:"Acme" }}>
//           Product successfully added to cart
//         </Alert>
//       )}
//       {showWishMessage && (
//         <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px' ,fontFamily:"Acme" }}>
//           Product successfully added to Wishlist 
//         </Alert>
//       )}
//     </div>
//   )
// }

// export default Eectronics;


import React, { useEffect, useState, useContext } from 'react';
import "./CategoriesStyle.css";
import ReactStars from "react-rating-stars-component";
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showWishMessage, setShowWishMessage] = useState(false);
  const cart = useContext(CartContext);

  useEffect(() => {
    async function fetchElectronics() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        const data = await response.json();
        setElectronics(data);
      } catch (error) {
        console.error("Error fetching electronics data:", error);
      }
    }
    fetchElectronics();
  }, []);

  const handleAddToCart = (item) => {
    cart.AddProductToCart(item);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleAddToWishlist = (item) => {
    cart.AddProductToWishlist(item);
    setShowWishMessage(true);
    setTimeout(() => setShowWishMessage(false), 3000);
  };

  return (
    <div className='electronicsContainer'>
      <ul className='electronicList list-unstyled'>
        {electronics.map((item) => (
          <li key={item.id} className='electronicList__items'>
            <div className='containers'>
              <div className='electronicsContainer__img'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="overlay">
                <div className="text">
                  <Button
                    style={{ width: "3rem", height: "2.5rem", position: "relative" }}
                    variant="outline-none"
                    className="details-btn"
                    onClick={() => handleAddToWishlist(item)}
                  >
                    <img src="/images/download (3).png" alt="Wishlist" style={{ width: "1.5rem", height: "1.5rem" }} />
                  </Button>
                  <Button
                    style={{ width: "3rem", height: "2.5rem", position: "relative" }}
                    variant="outline-none"
                    className="details-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    <img src="/images/3523885.png" alt="Add to Cart" style={{ width: "1.5rem", height: "1.5rem" }} />
                  </Button>
                  <Button
                    style={{ width: "3rem", height: "2.5rem", position: "relative" }}
                    variant="outline-none"
                    className="details-btn"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <Link to={`/Electronics/${item.id}`}>
                      <img src="/images/download (6).png" alt="Details" style={{ width: "1.5rem", height: "1.5rem", textAlign: "center" }} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className='p-3'>
              <h5 className='mt-3'>{item.title.slice(0, 20)}</h5>
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                value={item.rating ? item.rating.rate : 3} // Adjust to use actual rating value
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
        <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '330px', fontFamily: "Acme" }}>
          Product successfully added to cart
        </Alert>
      )}
      {showWishMessage && (
        <Alert variant="success" className="alert-message fs-5" style={{ maxWidth: '360px', fontFamily: "Acme" }}>
          Product successfully added to Wishlist
        </Alert>
      )}
    </div>
  );
}

export default Electronics;
