import React from 'react'

import './Services.css'
import Card from '../Card/Card'
import { icon1, icon2, icon3 } from '../../assets'

const Services = () => {
    return (
        <div className='services'>
            <p className='services-smalltitle smalltitle'>What we Serve</p>
            <h2 className='services-title title'>fruit and vegetable delivered to your home</h2>
            <div className='services-cards'>
                <Card icon={icon1} title="Free shipping" description="Enjoy Order in a hand using the fresness of groceries." />
                <Card icon={icon2} title="15 days returns" description="Order in a handy way using the freshness of the groceries." background={true} />
                <Card icon={icon3} title="Secure checkout" description="If you get rotten items - return immediately to us." />
            </div>
        </div>
    )
}

export default Services