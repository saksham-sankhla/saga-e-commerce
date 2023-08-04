import React from 'react'
import ProductComp from './ProductComp'
import './Products.css'
import { useNavigate } from 'react-router-dom'

export default function Products({sortedProducts}) {
  
  const navigate = useNavigate()

  const handleProductClick = (product) => {
    navigate(`/Item/${product.id}`)
  }


  return (
    <div className='prodContainer'>
        {sortedProducts.map((item) => {
          return <ProductComp item={item} key={item.id} onProductClick={handleProductClick} />
})}
    </div>
  ) 
}
