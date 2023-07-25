import React from 'react'
import styles from './Slider.module.css'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


export default function Slider() {
  return (
    <div className={styles.container}>
        <div className={styles.arrow}>
            <ArrowLeftOutlinedIcon />
        </div>
        <div className={styles.arrow}>
            <ArrowRightOutlinedIcon />
        </div>
    </div>
  )
}
