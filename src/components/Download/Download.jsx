import React from 'react'

import './Download.css'
import { phone, playstore, appstore } from '../../assets'

const Download = () => {
    return (
        <div className='download'>
            <div className='download-img'>
                <img src={phone} />
            </div>
            <div className='download-content'>
                <p className='smalltitle smalltitle-download'>Download our app</p>
                <h2 className='title'>Get the Groceries app order more easily.</h2>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <div className='download-buttons'>
                    <button>
                        <img src={appstore} />
                        <p className='download-buttons-text'>App Store</p>
                    </button>
                    <button>
                        <img src={playstore} />
                        <p className='download-buttons-text'>Play Store</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Download