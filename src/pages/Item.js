import React, { useContext } from 'react'
import './Item.css'
import Navbar from "../Components/Navbar"
import Announcements from "../Components/Announcements"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { popularProducts } from '../data'
import { useParams } from 'react-router-dom'
import cartContext from '../Context/CartContext'

export default function Item() {
let {productId} = useParams()
const product = popularProducts.find(obj => {
    const numProduct = Number(productId)
    return obj.id === numProduct;
    
})

const [productSize, setProductSize] = React.useState('S')
const [prodQuantity, setProdQuantity] = React.useState(1)

function addProd(){
    setProdQuantity(prevQuant => prevQuant + 1)
  }

  function removeProd(){
    if (prodQuantity > 1) {
        setProdQuantity(prevQuant => prevQuant - 1)
    }
  }

    const cartStateSet = useContext(cartContext)
    const cartItems = cartStateSet.cartItems
    const handleAddToCart = () => cartStateSet.addItemToCart (product, productSize, prodQuantity)
    

    const inCart = cartItems.some((cartItem) => cartItem.id === product.id)

    const btnText = inCart ? 'ADDED TO CART' : 'ADD TO CART'
    const btnColor = inCart ? '#134e4a' : 'white'
    const btnTextColor = inCart ? 'white' : 'black'
    
    console.log(btnText)


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
                        <select className='itemFilterSize' value={productSize} onChange={(e) => setProductSize(e.target.value)}>
                            <option className='itemFilterSizeOption' value='XS' >XS</option>
                            <option className='itemFilterSizeOption' value='S' selected='selected' >S</option>
                            <option className='itemFilterSizeOption' value='M' >M</option>
                            <option className='itemFilterSizeOption' value='L' >L</option>
                            <option className='itemFilterSizeOption' value='XL' >XL</option>
                        </select>
                        
                    </div>
                </div>
                <div className='itemAddContainer'>
                    <div className='itemQtyContainer'>
                        <RemoveIcon onClick={removeProd}/>
                        <span className='itemQty'>{prodQuantity}</span>
                        <AddIcon onClick={addProd}/>
                    </div>
                    <button className='itemCartBtn' onClick={handleAddToCart} style={{backgroundColor: btnColor, color: btnTextColor}}>{btnText}</button>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}
