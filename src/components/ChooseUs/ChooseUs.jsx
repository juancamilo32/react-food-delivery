import React from 'react'

import './ChooseUs.css'

import { chooseus } from '../../assets'

const ChooseUs = () => {
    return (
        <div className='chooseus'>
            <img className='chooseus-img' src={chooseus} />
            <div className='chooseus-content'>
                <p className='smalltitle chooseus-smalltitle'>WHY CHOOSE US</p>
                <h2 className='title'>Find Favorites and Discover New Ones</h2>
                <p className='description'>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.</p>
                <button className='styled-button filled-button'>Explore Now</button>
            </div>
        </div>
    )
}

export default ChooseUs