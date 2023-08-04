import React from 'react'
import { categories } from '../data'
import Categoryitem from './Categoryitem'
import './Categories.css'

export default function Categories() {
    return (
        <div className='catContainer'>
            {categories.map(item => (
                <Categoryitem item={item}/>
            ))} 
        </div>
      )
    }
