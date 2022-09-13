import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
// import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <div >
                <Link className='title-container footer-hover' to='/'>
                    Digital Introspection
                </Link>
            </div>
            {/* <div className='title-container footer-hover'>Digital Introspection</div> */}
            <div className='tabs-container'>
                <div >
                    <Link className='tabs-About footer-hover' to='/About'>
                        About
                    </Link>
                </div>
                <div>
                    <Link className='tabs-I-Liv footer-hover' to='/I.Liv.'>I.Liv.</Link>
                </div>
                <div>
                    <Link className='tabs-Sign-Up footer-hover' to='/Sign-Up'>Sign Up</Link>
                </div>
                {/* <div className='tabs-Sign-Up footer-hover'>Privacy Policy</div> */}

            </div>
            {/* <div className='social-media-container-icons'>
                <FaInstagram className='footer-hover' size={25} />
                <FaFacebookF className='footer-hover' size={25} />

            </div> */}

        </div>
    )
}

export default Footer
