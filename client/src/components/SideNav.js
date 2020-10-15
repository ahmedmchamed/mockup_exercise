import React from 'react';
import {Link} from 'react-router-dom';
import './sidenav.css';
// import arrow from '../design/side-bar-arrow.png'

const SideNav = () => {

    return (
        <>
            <div id="side-nav-bar">
                <nav>
                    <ul>
                        <li>
                            <Link 
                                to="/home">HOME
                                {/* <img className="link-arrow" src={arrow}/> */}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/schedule">SCHEDULE
                                {/* <img className="link-arrow" src={arrow}/> */}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )

}

export default SideNav;