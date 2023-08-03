import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './ProductComp.css'

export default function ProductComp({item, onProductClick}) {
  
     

    const [likeItem, setLikeItem] = React.useState(item)

    function likeBtn(){
        setLikeItem(prevItem =>(
            {   ...prevItem,
                liked: !prevItem.liked
            }
        ))
    }

    const likeBg = likeItem.liked ? '#CD5C5C' : 'white';
    const btnColor = likeItem.liked ? 'white' : 'black';

    function handleProductClick(){
        onProductClick(item)
    }

    return (
    <div className='prodCompContainer' onClick={handleProductClick}>
        <div className='prodCompCircle'></div>
        <img className='prodCompImage' src={item.img} alt="" />
        <div className='prodCompInfo'>
            <div className='prodCompIconContainer'>
                <ShoppingCartOutlinedIcon />
            </div>
            <div className='prodCompIconContainer'>
                <SearchOutlinedIcon />
            </div>
            <div className='prodCompIconContainer' style={{backgroundColor: likeBg}} onClick={likeBtn}>
                <FavoriteBorderOutlinedIcon style={{color: btnColor}} />
            </div>
        </div>
    </div>
  )
}
