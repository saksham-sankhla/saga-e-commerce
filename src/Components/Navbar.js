import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  
  const navigate = useNavigate()

  function registerRoute(){
  navigate("/Register")
  }

  function signInRoute(){
    navigate("/Login")
  }

  function cartRoute(){
    navigate("/Cart")
  }

  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='navLeft'>
          <span className='navLanguage'>EN</span>
          <div className='navSearchContainer'>
            <input className='navInput' />
            <SearchIcon style={{color:"gray", fontSize:16}} />
          </div>
        </div>
        <div className='navCenter'>
          <h1 className='navLogo'>SAGA</h1>
        </div>
        <div className='navRight'>
          <div className='navMenuItem' onClick={registerRoute}>REGISTER</div>
          <div className='navMenuItem' onClick={signInRoute}>LOGIN</div>
          <div className='navMenuItem'>
            <Badge badgeContent={4} color="primary" onClick={cartRoute}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
