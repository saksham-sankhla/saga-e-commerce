import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './ProductComp.css'

export default function ProductComp({item}) {
  return (
    <div className='prodCompContainer'>
        <div className='prodCompCircle'></div>
        <img className='prodCompImage' src={item.img} alt="" />
        <div className='prodCompInfo'>
            <div className='prodCompIconContainer'>
                <ShoppingCartOutlinedIcon />
            </div>
            <div className='prodCompIconContainer'>
                <SearchOutlinedIcon />
            </div>
            <div className='prodCompIconContainer'>
                <FavoriteBorderOutlinedIcon />
            </div>
        </div>
    </div>
  )
}
