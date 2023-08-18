import React from "react";
import cartContext from "./CartContext";

export default function CartState(props) {
  const [cartItems, setCartItems] = React.useState([]);
  let defaultSize = 'S'

  function addItemToCart(item, productSize) {

    const selectedSize = productSize ? productSize : defaultSize

    const newItem = {...item, size: selectedSize}
    
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === newItem.id)
    
    if(!isItemInCart){
        setCartItems((prevItems) => [...prevItems, newItem]);
    }
  }

  function clearCartItems(){
    setCartItems([])
  }

  const state = {
    cartItems,
    addItemToCart,
    clearCartItems
  };

  return (
    <cartContext.Provider value={state}>{props.children}</cartContext.Provider>
  );
}
