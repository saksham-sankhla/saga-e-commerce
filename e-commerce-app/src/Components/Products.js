import React from 'react'
// import { popularProducts } from '../data'
import ProductComp from './ProductComp'
import './Products.css'
import { popularProducts } from '../data'

export default function Products() {
  return (
    <div className='prodContainer'>
        {popularProducts.map((item) => {
          return <ProductComp item={item} key={item.id} />
})}
    </div>
  ) 
}
