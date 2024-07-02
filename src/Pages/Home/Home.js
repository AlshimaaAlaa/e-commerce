import React from 'react';
import Header from '../../Components/Header';
import WhyShop from '../../Components/WhyShop';
import HomeProducts from '../Products/HomeProducts';
import Blog from '../../Components/Blog';
import Subscribe from '../../Components/Subscribe';
import InspireSection from '../../Components/InspireSection';
function Home() {
  return (
    <div>
      <Header/>
      <WhyShop/>
      <HomeProducts/>
      <Blog/>
      <Subscribe/>
      <InspireSection/>
    </div>
  )
}

export default Home;