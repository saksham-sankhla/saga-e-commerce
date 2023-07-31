import React from 'react'
import './Cart.css'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

export default function Cart() {
  return (
    <div className='cartContainer'>
        <Navbar />
        <Announcements />
        <div className='cartWrapper'>
            <h1 className='cartTitle'>YOUR CART</h1>
            <div className='cartTop'>
            <button className='cartTopBtn' style={{backgroundColor: 'transparent'}}>CONTINUE SHOPPING</button>
                <div className='cartTopTextContainer'>
                    <span className='cartTopText'>Shopping Bag(2)</span>
                    <span className='cartTopText' >Your Wishlist</span>
                </div>
            <button className='cartTopBtn' style={{border: 'none', backgroundColor: 'black', color: 'white'}}>CHECKOUT NOW</button>
            </div>
            <div className='cartBottom'></div>
        </div>
        <Newsletter />
        <Footer />
    </div>

    )
}
