import React from 'react'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import './ProductList.css'
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"

export default function ProductList() {
  return (
    <div className='prodLiContainer'>
        <Navbar />
        <Announcements />
        <h1 className='prodLiTitle'>Apparels</h1>
        <div className='prodLiFilterContainer'>
            <div className='prodLiFilter'><span className='prodLiFilterText'>Filter Products:</span>
                <select className='prodLiSelect'>
                    <option className='prodLiOption' disabled selected>
                        Color
                    </option>
                    <option className='prodLiOption'>White</option>
                    <option className='prodLiOption'>Black</option>
                    <option className='prodLiOption'>Red</option>
                    <option className='prodLiOption'>Blue</option>
                    <option className='prodLiOption'>Yellow</option>
                    <option className='prodLiOption'>Green</option>
                </select>
                <select className='prodLiSelect'>
                    <option className='prodLiOption' disabled selected>
                        Size
                    </option>
                    <option className='prodLiOption'>XS</option>
                    <option className='prodLiOption'>S</option>
                    <option className='prodLiOption'>M</option>
                    <option className='prodLiOption'>L</option>
                    <option className='prodLiOption'>XL</option>
                </select>
            </div>
            <div className='prodLiFilter'><span className='prodLiFilterText'>Sort Products:</span>
                <select className='prodLiSelect'>
                    <option className='prodLiOption' select>Newest</option>
                    <option className='prodLiOption'>Price (asc)</option>
                    <option className='prodLiOption'>Price (desc)</option>
                </select>
            </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}
