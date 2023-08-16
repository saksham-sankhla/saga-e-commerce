import React, { useContext } from 'react'
import ProductComp from './ProductComp'
import './Products.css'
import { useNavigate } from 'react-router-dom'
import cartContext from '../Context/CartContext'

export default function Products({sortedProducts}) {
  
  const navigate = useNavigate()

  const cartStateSet = useContext(cartContext)
  const handleAddToCart = cartStateSet.addItemToCart
  const cartItems = cartStateSet.cartItems
 
  const handleProductClick = (product) => {
    navigate(`/Item/${product.id}`)
  }

  return (
    <div className='prodContainer'>
        {sortedProducts.map((item) => {
          return <ProductComp item={item} key={item.id} onProductClick={handleProductClick} onCartClick={handleAddToCart} cartItems={cartItems} />
})}
    </div>
  ) 
}
