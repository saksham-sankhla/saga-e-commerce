import React from "react"
import Navbar from "../Components/Navbar"
import Announcements from "../Components/Announcements"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../Components/Products"



const Home = () => {
    return(
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    )
} 

export default Home