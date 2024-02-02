import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu

function Navigation() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='navibar'>
            <div className='navibar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />} {/* Use React icons */}
                </div>
                <ul className={click ? 'navi-menu active' : 'navi-menu'}>
                    <li className='navi-item' onClick={closeMobileMenu}>
                        <Link to='/' className='navi-links'>
                            New
                        </Link>
                    </li>
                    <li className='navi-item' onClick={closeMobileMenu}>
                        <Link to='/overview' className='navi-links'>
                            Overview
                        </Link>
                    </li>
                   
                    <li className='navi-item' onClick={closeMobileMenu}>
                        <Link to='/profile' className='navi-links'>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
