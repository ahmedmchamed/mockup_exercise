import React from 'react';
import {Link} from 'react-router-dom';
import './sidenav.css';

const SideNav = () => {

    return (
        <>
            <div id="side-nav-bar">
                <nav>
                    <ul>
                        <li >
                            <Link
                                to="/home">HOME
                            </Link>
                        </li>
                        <li >
                            <Link
                                to="/schedule">SCHEDULE
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )

}

export default SideNav;