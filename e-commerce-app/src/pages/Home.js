import React from "react"
import Navbar from "../Components/Navbar"
import Announcements from "../Components/Announcements"
import Slider from "../Components/Slider"
import Categories from "../Components/Categories"



const Home = () => {
    return(
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    )
} 

export default Home