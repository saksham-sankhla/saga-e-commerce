import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
//import CartComp from '../Components/CartComp'
import Footer from '../Components/Footer'
import '../Components/CartComp.css'
import Cart from '../Components/Cart'
import cartContext from '../Context/CartContext'

export default function CartPage() {

    const cartStateSet = useContext(cartContext)
    const cartItems = cartStateSet.cartItems
    const clearCart = cartStateSet.clearCartItems

    let sum = 0;
    for(let i = 0; i < cartItems.length; i++){
        sum = sum + cartItems[i].price
    }

    console.log(sum)

    const shipping = cartItems.length > 0 ? 5.90 : 0;
    const subtotal = Math.round(sum)
    const total = Math.round(sum + shipping)

    const renderDep = cartItems.length > 0;

    const whatRender = renderDep ? <Cart /> : <h1 className='cartEmpty'>Your Cart is Empty!</h1>

  return (
    <div>
        <div className='cartContainer'>
            <Navbar />
            <Announcements />
            <div className='cartWrapper'>
            <h1 className='cartTitle'>YOUR CART</h1>
            <div className='cartTop'>
            <button className='cartTopBtn' style={{backgroundColor: 'transparent'}} onClick={clearCart} >CLEAR CART</button>
                <div className='cartTopTextContainer'>
                    <span className='cartTopText'>Shopping Bag({cartItems.length})</span>
                    <span className='cartTopText' >Your Wishlist</span>
                </div>
            <button className='cartTopBtn' style={{border: 'none', backgroundColor: 'black', color: 'white'}}>CHECKOUT NOW</button>
            </div>
            <div className='cartBottom'>
                <div className='cartInfoContainer'>
                    {/* <Cart /> */}
                    {whatRender}
                </div>
            {renderDep && <div className='cartSummaryContainer'>
                    <h1 className='cartSummaryTitle'>ORDER SUMMARY</h1>
                    <div className='cartSummaryItem'>
                        <span className='cartSummaryItemText'>Subtotal</span>
                        <span className='cartSummaryItemPrice'>$ {subtotal}</span>
                    </div>
                    <div className='cartSummaryItem'>
                        <span className='cartSummaryItemText'>Estimated Shipping</span>
                        <span className='cartSummaryItemPrice'>$ {shipping}</span>
                    </div>
                    <div className='cartSummaryItem'>
                        <span className='cartSummaryItemText'>Shipping Discount</span>
                        <span className='cartSummaryItemPrice'>$ -{shipping}</span>
                    </div>
                    <div className='cartSummaryItem' style={{fontWeight: '500', fontSize: '24px'}}>
                        <span className='cartSummaryItemText'>Total</span>
                        <span className='cartSummaryItemPrice'>$ {total}</span>
                    </div>
                    <button className='cartCheckoutBtn'>CHECKOUT NOW</button>
                </div>}
            </div>
        </div>
    </div>
<Footer />
</div>
  )
}
