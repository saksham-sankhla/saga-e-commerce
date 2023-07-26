import React from 'react'
import './Categoryitem.css'



export default function Categoryitem({item}) {
  return (
    <div className='catItemContainer'>
        <img className='catItemImage' src={item.img} alt="" />
        <div className='catItemInfoContainer'>
            <h1 className='catItemTitle'>{item.title}</h1>
            <button className='catItemBtn'>SHOP NOW</button>
        </div>
    </div>
  )
}
