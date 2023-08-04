import React from 'react'
import './Categoryitem.css'
import { useNavigate } from 'react-router-dom'



export default function Categoryitem({item}) {
  
  const navigate = useNavigate()

  function catItemRoute(){
    navigate('/ProductList')
  }

  return (
    <div className='catItemContainer'>
        <img className='catItemImage' src={item.img} alt="" />
        <div className='catItemInfoContainer'>
            <h1 className='catItemTitle'>{item.title}</h1>
            <button className='catItemBtn' onClick={catItemRoute}>SHOP NOW</button>
        </div>
    </div>
  )
}
