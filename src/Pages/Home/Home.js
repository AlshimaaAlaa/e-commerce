import React from 'react';
import Header from '../../Components/Header/Header';
import WhyShop from '../../Components/WhyShop/WhyShop';
import HomeProducts from '../Products/HomeProducts';
import Blog from '../../Components/Blog/Blog';
import Subscribe from '../../Components/Sub/Sub';
import InspireSection from '../../Components/Inspire/Inspire';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
function Home() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <WhyShop/>
      <HomeProducts/>
      <Blog/>
      <Subscribe/>
      <InspireSection/>
      <Footer/>
    </div>
  )
}

export default Home;