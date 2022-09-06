import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <IconContext.Provider value={{ color: '#333333' }}>


                <div className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            Digital Introspection
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/I.Liv.' className="nav-links" onClick={closeMobileMenu}>
                                    I.Liv.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Sign-Up' className="nav-links" onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                            {/* <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link' >
                                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                                    </Link>
                                ) : (
                                    // <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                                    //     <Button buttonStyle='btn--outline'
                                    //         buttonSize='btn--mobile'>
                                    //         Sign Up</Button>

                                    // </Link>
                                )}
                            </li> */}
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
