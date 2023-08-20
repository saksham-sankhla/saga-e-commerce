import React from "react"
import Navbar from "../Components/Navbar"
import Announcements from "../Components/Announcements"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import { popularProducts } from "../data"



const Home = () => {
    return(
        <div>
            <Navbar />
            <Announcements />
            <Slider />
            <Categories />
            <Products sortedProducts={popularProducts}/>
            <Newsletter />
            <Footer />
        </div>
    )
} 

export default Home