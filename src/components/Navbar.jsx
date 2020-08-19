import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShow(true);
            } else setShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_block"}`}>
           <img 
                className="nav_logo"
                src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=6"
                alt="Netflix Logo"
             />
             <img 
               className="nav_avatar"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO_NN_e8GIGlV_9SOcDpzKzrCO5waM6_3akA&usqp=CAU"
               alt="Netflix Logo"
              />
        </div>
    )
}
