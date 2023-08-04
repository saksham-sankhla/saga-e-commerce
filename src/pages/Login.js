import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='loginContainer'>
        <div className='loginWrapper'>
            <h1 className='loginTitle'>SIGN IN</h1>
            <form className='loginForm'>
                <input className='loginInput' placeholder='Username' />
                <input className='loginInput' placeholder='Password' />
                <a className='loginLinks' href='something'>Forgot Password? Click here!</a>
                <a className='loginLinks' href='something'>Create a New Account</a>
                <button className='loginBtn'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}
