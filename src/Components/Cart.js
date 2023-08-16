import React, { useContext } from 'react'
import CartComp from './CartComp'
import cartContext from '../Context/CartContext' 


export default function Cart(){

    const cartStateSet = useContext(cartContext)
    const cartItems = cartStateSet.cartItems
    

  return (
    <div >
        {cartItems.map((item) => {
          return <CartComp item={item} key={item.id} />
})}
    </div>
  ) 
}
