import React from 'react'
import ProductComp from './ProductComp'
import './Products.css'
import { popularProducts } from '../data'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  
  const navigate = useNavigate()

  const handleProductClick = (product) => {
    navigate(`/Item/${product.id}`)
  }


  return (
    <div className='prodContainer'>
        {popularProducts.map((item) => {
          return <ProductComp item={item} key={item.id} onProductClick={handleProductClick} />
})}
    </div>
  ) 
}
