import React from 'react'
import './Cart.css'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
            <div className='cartBottom'>
                <div className='cartInfoContainer'>
                    <div className='cartProduct'>
                        <div className='cartProductDetails'>
                            <img className='cartProductImg' alt='' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                            <div className='cartProductNameContainer'>
                                <span className='cartProductName'><b>Product:</b>JESSIE THUNDER SHOES</span>
                                <span className='cartProductId'><b>Id:</b>JTSS180</span>
                                <div className='cartProductColor' style={{backgroundColor: 'black'}}/>
                                <span className='cartProductSize'><b>Size:</b>UK-7</span>
                            </div>
                        </div>
                        <div className='cartPriceDetails'>
                            <div className='cartAmountContainer'>
                                <AddIcon />
                                <div className='cartProdQuant'>2</div>
                                <RemoveIcon />
                            </div>
                            <div className='cartProdPrice'>$ 30</div>
                        </div>
                    </div>                
                <hr className='divider' />
                    <div className='cartProduct'>
                        <div className='cartProductDetails'>
                            <img className='cartProductImg' alt='' src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                            <div className='cartProductNameContainer'>
                                <span className='cartProductName'><b>Product:</b>HAKURA T-SHIRT</span>
                                <span className='cartProductId'><b>Id:</b>HKTGM18</span>
                                <div className='cartProductColor' style={{backgroundColor: 'grey'}}/>
                                <span className='cartProductSize'><b>Size:</b>M</span>
                            </div>
                        </div>
                        <div className='cartPriceDetails'>
                            <div className='cartAmountContainer'>
                                <AddIcon />
                                <div className='cartProdQuant'>2</div>
                                <RemoveIcon />
                            </div>
                            <div className='cartProdPrice'>$ 30</div>
                        </div>
                    </div>
                </div>
                <div className='cartSummaryContainer'>
                    <h1 className='cartSummaryTitle'>ORDER SUMMARY</h1>
                    <div className='cartSummaryItem'>
                        <span className='cartSummaryItemText'>Subtotal</span>
                        <span className='cartSummaryItemPrice'>$ 80</span>
                    </div>
                    <div className='cartSummaryItem'>
                        <span className='cartSummaryItemText'>Estimated Shipping</span>
                        <span className='cartSummaryItemPrice'>$ 5.90</span>
                    </div>
                    <div className='cartSummaryItem'>
                        <span className='cartSummaryItemText'>Shipping Discount</span>
                        <span className='cartSummaryItemPrice'>$ -5.90</span>
                    </div>
                    <div className='cartSummaryItem' style={{fontWeight: '500', fontSize: '24px'}}>
                        <span className='cartSummaryItemText'>Total</span>
                        <span className='cartSummaryItemPrice'>$ 80</span>
                    </div>
                    <button className='cartCheckoutBtn'>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>

    )
}
