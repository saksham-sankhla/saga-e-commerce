import React from "react";
import "./Slider.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { useNavigate } from "react-router-dom";

export default function Slider() {
    
    const [slideIndex, setSlideIndex] = React.useState(0);
    
    function handleClick(direction){
        debugger
        if(direction === "left"){
            setSlideIndex(prev => prev > 0 ? prev-1 : 2);
        }if(direction === "right"){
            setSlideIndex(prev => prev < 2 ? prev + 1 : 0);
        }
    }
    
    const navigate = useNavigate()

    function shopRouteHandler(){
      navigate("/ProductList")
    }

  return (
    <div className="container">
      <div className="arrow arrowLeft" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </div>
      <div className="wrapper" style={{transition: "all 1.5s ease",transform: `translateX(${slideIndex * -100}vw)`}}>
        {sliderItems.map((item) => (
        <div className="slide" style={{backgroundColor: `#${item.bg}`}}>
        <div className="imageContainer">
          <img className="image" src={item.img} alt="" />
        </div>
        <div className="infoContainer">
          <h1 className="title">{item.title}</h1>
          <p className="desc">{item.desc}</p>
          <button className="btn" onClick={shopRouteHandler}>SHOP NOW</button>
        </div>
      </div>
        ))}
    </div>
    <div className="arrow arrowRight" onClick={()=> {handleClick("right")}}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
}