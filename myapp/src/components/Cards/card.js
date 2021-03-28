import React from 'react'
import "./card.scss"

function Card(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.town}</p>
        </div>
    )
}

export default Card;
