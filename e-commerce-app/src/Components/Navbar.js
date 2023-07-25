import React from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input className={styles.input} />
            <SearchIcon style={{color:"gray", fontSize:16}} />
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>SAGA</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem}>REGISTER</div>
          <div className={styles.menuItem}>SIGN IN</div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
