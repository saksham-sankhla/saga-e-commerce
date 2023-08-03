import React from "react"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Item from "./pages/Item";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from './pages/Cart'

import {BrowserRouter as Main, Route, Routes} from 'react-router-dom'

const App = () => {
    
    return(
    <Main>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/ProductList" element={<ProductList/>} />
        <Route exact path="/Item/:productId" element={<Item/>} />
        {/* <Route path="/Item/:productId" component={<Item />} /> */}
        <Route exact path="/Register" element={<Register/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Cart" element={<Cart/>} />
      </Routes>
    </Main>
   )
};

export default App;