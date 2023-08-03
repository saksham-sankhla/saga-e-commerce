import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigate = useNavigate()

    function navHomeRoute(){
        navigate('/')
    }

    function navCartRoute(){
        navigate('/Cart')
    }

    function navProdRoute(){
        navigate('/ProductList')
    }

    return (
    <div className='footerContainer'>
        <div className='footerLeft'>
            <h1 className='footerLeftLogo'>SAGA</h1>
            <p className='footerLeftDesc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className='footerLeftSocialContainer'>
                <div className='footerLeftSocialIcon'>
                    <FacebookIcon />
                </div>
                <div className='footerLeftSocialIcon'>
                    <InstagramIcon />
                </div>
                <div className='footerLeftSocialIcon'>
                    <TwitterIcon />
                </div>
            </div>
        </div>
        <div className='footerCenter'>
            <h3 className='footerCenterTitle'>Useful Links</h3>
            <ul className='footerCenterList'>
                <li className='footerCenterListItem' onClick={navHomeRoute}>Home</li>
                <li className='footerCenterListItem' onClick={navCartRoute}>Cart</li>
                <li className='footerCenterListItem' onClick={navProdRoute}>Men's Fashion</li>
                <li className='footerCenterListItem' onClick={navProdRoute}>Women's Fashion</li>
                <li className='footerCenterListItem'>Accessories</li>
                <li className='footerCenterListItem'>My Account</li>
                <li className='footerCenterListItem'>Order Tracking</li>
                <li className='footerCenterListItem'>Wishlist</li>
                <li className='footerCenterListItem'>Terms</li>
            </ul>
        </div>
        <div className='footerRight'>
            <h3 className='footerRightTitle'>Contact</h3>
            <div className='footerRightContactItem'>
                <PlaceIcon/> 422-Global BH, Andheri East, Mumbai
            </div>
            <div className='footerRightContactItem'>
                <PhoneAndroidIcon /> +91 - 80002 2845
            </div>
            <div className='footerRightContactItem'>
                <EmailIcon /> contact@saga.in
            </div>
            <img className='footerRightPayment' src='https://i.ibb.co/Qfvn4z6/payment.png' alt='' />
        </div>
    </div>
  )
}
