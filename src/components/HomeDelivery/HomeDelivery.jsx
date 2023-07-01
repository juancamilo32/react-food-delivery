import React from 'react'

import './HomeDelivery.css'

import { homedelivery } from '../../assets'

const HomeDelivery = () => {
    return (
        <div className='homedelivery'>
            <div className='homedelivery-content'>
                <p className='smalltitle homedelivery-smalltitle'>HOME DELIVERY</p>
                <h2 className='title'>Sit at Home We Will Take Care Your Order</h2>
                <p className='description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.</p>
                <button className='styled-button empty-button'>Explore Now</button>
            </div>
            <img className='homedelivery-img' src={homedelivery} />
        </div>
    )
}

export default HomeDelivery