import React from 'react'
import "./content.scss"
function Content() {
    return (
        <div className="content">

            {/* Title */}
            <div className="content__title">
            <h1>BINU CREATIONS</h1>
            </div>

            {/* Buttons */}
            <div className="content__buttons">
                <ul>
                    <li>Watch Videos</li>
                    <li>Learn More</li>
                </ul>
            </div>
        </div>
    )
}

export default Content;
