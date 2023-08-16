import React from "react";
import cartContext from "./CartContext";

export default function CartState(props) {
  const [cartItems, setCartItems] = React.useState([]);

  function addItemToCart(item) {
    if(!cartItems.includes(item)){
        setCartItems((prevItems) => [...prevItems, item]);
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
