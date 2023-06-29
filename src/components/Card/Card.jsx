import React from 'react'

import './Card.css'

const Card = (props) => {
    return (
        <div>
            <div className={`card ${props.background ? "absolute" : ""}`} >
                <img src={props.icon} className='card-img' />
                <h1 className='card-title'>{props.title}</h1>
                <p className='card-description'>{props.description}</p>
            </div>
            {
                props.background ? <div className='card-background'></div> : null
            }
        </div>
    )
}

export default Card