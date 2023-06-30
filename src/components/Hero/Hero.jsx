import React from 'react'

import { headerimage, strawberry, play } from '../../assets'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <div className='hero-content-strawberry'>
                    <p className='hero-content-strawberry-text'>More than Faster</p>
                    <img src={strawberry} className='hero-content-strawberry-img' />
                </div>
                <h1 className='hero-content-title'>Groceries delivered in as little as <span style={{ color: "#F54748" }}>2 hours</span></h1>
                <p className='hero-content-text'>Grover assures fresh groceries every morning to your family without getting out in this pandemic.</p>
                <div className='hero-content-buttons'>
                    <button className='styled-button filled-button' type='button'>Order Now</button>
                    <img src={play} className='hero-content-buttons-play' />
                    <p className='hero-content-buttons-text'>Order Process</p>
                </div>
            </div>
            <div className='hero-image'>
                <img src={headerimage} alt='Hero Image' />
            </div>
        </div>
    )
}

export default Hero