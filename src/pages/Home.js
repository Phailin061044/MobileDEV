import React from 'react'
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Featured from '../component/Featured';
import PropertyList from '../component/PropertyList';
import FeaturedProperties from '../component/FeaturedProperties';
import MailList from '../component/MailList';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Home guest love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home