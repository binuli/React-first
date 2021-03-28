import React from 'react'
import "./navbar.scss"

function Navbar() {
    return (
     
             <div className="navbar">
            {/* Navbar links */}
                <div className="navbar__links">
                <ul>
                     <li className="navbar__links__active">Home</li> 
                     <li>About</li> 
                    <li>Services</li> 
                     <li>Gallery</li> 
                     <li>Contact</li> 
                </ul>
            </div>
            {/* Navbar logo */}
              <div className="navbar__logo"><img src="./logo.jpg"></img></div>  
            
            
        </div>
    )
}

export default Navbar
