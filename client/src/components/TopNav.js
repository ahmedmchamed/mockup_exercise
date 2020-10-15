import React from 'react';
import './topnav.css';

const TopNav = () => {

    return (
        <>
            <div id="top-nav-bar">
                <input 
                    type="text"
                    placeholder="Search"
                />
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </>
    )

}

export default TopNav;