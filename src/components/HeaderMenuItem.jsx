import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const HeaderMenuItem = ({ text, navLink}) => {
    const location = useLocation();
//    console.log(location.pathname)
//    let clicked = false

    return (
        <li>
            <Link 
                to={navLink}
                className={`headeranchor ${location.pathname === navLink ? 'active' : ''}`}
                >
                { text }
            </Link>
        </li>
      )    
}