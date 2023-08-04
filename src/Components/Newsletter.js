import React from 'react'
import './Newsletter.css'
import SendIcon from '@mui/icons-material/Send';

export default function Newsletter() {
  return (
    <div className='newsContainer'>
        <h1 className='newsTitle'>Newsletter</h1>
        <div className='newsDesc'>Get timely updates from your favorite brands!</div>
        <div className='newsInputContainer'>
            <input className='newsInput' placeholder='Your email:'/>
            <button className='newsBtn'>
                <SendIcon />
            </button>
        </div>
    </div>
  )
}
