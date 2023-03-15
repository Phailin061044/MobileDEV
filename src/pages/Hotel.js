import React from 'react'
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import MailList from '../component/MailList';
import Footer from '../component/Footer';


const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='hotelContainer'></div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Hotel