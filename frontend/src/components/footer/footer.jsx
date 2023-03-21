import React from 'react';
import './footerSytles.css'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";

function Footer(props) {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Charity Website</h3>
                    <div className="social">
                        <FaInstagram className='icons' />
                        <FaFacebook className='icons' />
                        <FaTwitter className='icons' />
                        <FaYoutube className='icons' />
                        <FaPinterest className='icons' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Donate</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="right">

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;