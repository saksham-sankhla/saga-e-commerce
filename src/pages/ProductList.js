import React from 'react'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import './ProductList.css'
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import { popularProducts } from '../data'
//import ProductComp from '../Components/ProductComp'
import Products from '../Components/Products'

export default function ProductList() {

    // const [sortState, setSortState] = React.useState('newest')
    const [products, setProducts] = React.useState(popularProducts)

    function handleSortChange(event){
        
        const selectedSortingOrder = event.target.value;
        console.log("called!", selectedSortingOrder)
        

        if(selectedSortingOrder === 'asc'){
            setProducts(popularProducts.slice().sort((a,b) => a.price - b.price))
        } else if(selectedSortingOrder === 'desc'){
            setProducts(popularProducts.slice().sort((a,b) => b.price - a.price))
        } else if(selectedSortingOrder === 'newest'){
            setProducts(popularProducts.slice().sort((a,b) => a.id - b.id))
        }
    }

    console.log(products)

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
                <select className='prodLiSelect' onChange={(e) => handleSortChange(e)}>
                    <option className='prodLiOption' value='newest' select>Newest</option>
                    <option className='prodLiOption' value='asc' >Price (asc)</option>
                    <option className='prodLiOption' value='desc'>Price (desc)</option>
                </select>
            </div>
        </div>
        {/* {products.map((item) => {
            return <ProductComp item={item} key={item.id} />
        })} */}
        <Products sortedProducts={products}/>
        <Newsletter />
        <Footer />
    </div>
  )
}
