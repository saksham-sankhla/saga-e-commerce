import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='registerContainer'>
        <div className='registerWrapper'>
            <h1 className='registerTitle'>CREATE AN ACCOUNT</h1>
            <form className='registerForm'>
                <input className='registerInput' placeholder='First Name' />
                <input className='registerInput' placeholder='Last Name' />
                <input className='registerInput' placeholder='Username' />
                <input className='registerInput' placeholder='Email' />
                <input className='registerInput' placeholder='Password' />
                <input className='registerInput' placeholder='Confirm Password' />
                <span className='registerAgreement'>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY.</b>
                </span>
                <button className='registerBtn'>Create</button>
            </form>
        </div>
    </div>
  )
}
