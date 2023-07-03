import React from 'react'

import './Footer.css'
import { logo } from '../../assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-content-grover'>
                    <img src={logo} />
                    <p>Fast delivery, which is active all over the world, serves with many transportation vehicles.</p>
                </div>
                <div className='footer-content-company'>
                    <h2 className='content-title'>Company</h2>
                    <ul className='content-links'>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>All Products</li>
                        <li>Locations Map</li>
                    </ul>
                </div>
                <div className='footer-content-services'>
                    <h2 className='content-title'>Services</h2>
                    <ul className='content-links'>
                        <li>Order Tracking</li>
                        <li>Wish List</li>
                        <li>My Account</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footer-content-getintouch'>
                    <h2 className='content-title'>Get in Touch</h2>
                    <p className='getintouch-content'>Subscribe to our weekly Newsletter and receive updates via email.</p>
                </div>
            </div>
            <div className='footer-divider' />
            <div className='footer-tyc'>
                <p className='footer-tyc-left'>All Rights Reserved @ BESNIK 2021</p>
                <div className='footer-tyc-right'>
                    <p>Terms & Conditions</p>
                    <p>Privacy & Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer