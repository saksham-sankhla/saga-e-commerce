import React from 'react'
import './Item.css'
import Navbar from "../Components/Navbar"
import Announcements from "../Components/Announcements"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { popularProducts } from '../data'
import { useParams } from 'react-router-dom'

export default function Item() {
let {productId} = useParams()
const product = popularProducts.find(obj => {
    const numProduct = Number(productId)
    return obj.id === numProduct;
    
})


return (
    <div className='itemContainer'>
        <Navbar />
        <Announcements />
        <div className='itemWrapper'>
            <div className='itemImgContainer'>
                <img className='itemImage' src={product.img} alt='' />
            </div>
            <div className='itemInfoContainer'>
                <h1 className='itemTitle'>{product.name}</h1>
                <p className='itemDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit just consequat id condimentum ac, volutpat ornare.
                </p>
                <span className='itemPrice'>$ {product.price}</span>
                <div className='itemFilterContainer'>
                    <div className='itemFilter'>
                        <span className='itemFilterTitle'>Color</span>
                        <div className='itemFilterColor' style={{backgroundColor: 'black'}}></div>
                        <div className='itemFilterColor' style={{backgroundColor: 'darkblue'}}></div>
                        <div className='itemFilterColor' style={{backgroundColor: 'gray'}} ></div>
                    </div>
                    <div className='itemFilter'>
                        <span className='itemFilterTitle>'>Size</span>
                        <select className='itemFilterSize'>
                            <option className='itemFilterSizeOption'>XS</option>
                            <option className='itemFilterSizeOption'>S</option>
                            <option className='itemFilterSizeOption'>M</option>
                            <option className='itemFilterSizeOption'>L</option>
                            <option className='itemFilterSizeOption'>XL</option>
                        </select>
                        
                    </div>
                </div>
                <div className='itemAddContainer'>
                    <div className='itemQtyContainer'>
                        <RemoveIcon />
                        <span className='itemQty'>1</span>
                        <AddIcon />
                    </div>
                    <button className='itemCartBtn'>ADD TO CART</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}
