import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import AllProducts from './Pages/Products/AllProducts';
// import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { CartProvider } from './Context/CartContext';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Cart/Wishlist';
import Eectronics from './Pages/Products/Eectronics';
import Jewelery from './Pages/Products/Jewelery';
import MenClothing from './Pages/Products/Men\'sClothing';
import WomenClothing from './Pages/Products/Women\'sClothing';
import CategoryDetails from './Pages/ProductDetails/CategoryDetails';
function App() {
  return (
    <div>
      <CartProvider>
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AllProducts' element={<AllProducts/>}/>
            {/* <Route path='/AboutUs' element={<AboutUs/>}/> */}
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/AllProducts/:id' element={<ProductDetails/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Wishlist' element={<Wishlist/>}/>
            <Route path='/Eectronics' element={<Eectronics/>}/>
            <Route path='/Jewelery' element={<Jewelery/>}/>
            <Route path='/MenClothing' element={<MenClothing/>}/>
            <Route path='/WomenClothing' element={<WomenClothing/>}/>
            <Route path='/Eectronics/:id' element={<CategoryDetails/>}/>
            <Route path='/Jewelery/:id' element={<CategoryDetails/>}/>
            <Route path='/MenClothing/:id' element={<CategoryDetails/>}/>
            <Route path='/WomenClothing/:id' element={<CategoryDetails/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>  
      </CartProvider>
    </div>
  );
}

export default App;
