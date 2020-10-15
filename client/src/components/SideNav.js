import React from 'react';
import {Link} from 'react-router-dom';
import './sidenav.css';

const SideNav = () => {

    return (
        <>
            <div id="side-nav-bar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/schedule">Schedule</Link>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default SideNav;