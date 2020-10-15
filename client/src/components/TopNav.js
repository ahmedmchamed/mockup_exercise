import React from 'react';
import './topnav.css';

const TopNav = () => {

    return (
        <>
            <div className="top-nav-bar">
                <header>
                <input
                    id="search-box" 
                    type="text"
                    placeholder="Search"
                />
                <nav className="top-nav-links">
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Admin</a></li>
                        <li id="logout"><a href="#">Logout</a></li>
                        {/* <li id="logout"><button><a href="#">Logout</a></button></li> */}
                    </ul>
                </nav>
                </header>
            </div>
        </>
    )

}

export default TopNav;