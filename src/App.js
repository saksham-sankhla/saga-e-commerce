import React from "react"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Item from "./pages/Item";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom'
import CartState from "./Context/CartState";
import CartPage from "./pages/CartPage";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
    
    return(
    <Main>
      <ScrollToTop />
      <CartState>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/ProductList" element={<ProductList/>} />
          <Route exact path="/Item/:productId" element={<Item/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/CartPage" element={<CartPage/>} />
        </Routes>
      </CartState>
    </Main>
   )
};

export default App;