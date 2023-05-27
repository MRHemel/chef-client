import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim ligula ac cursus.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Chef Street</p>
                    <p>New York, NY 12345</p>
                    <p>Email: info@chefwebsite.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons flex flex-col">
                        <Link className='flex text-xl'> <FaFacebook></FaFacebook> <small className='text-xl'>Facebook</small> </Link>
                        <Link className='flex text-xl'> <FaInstagram></FaInstagram> <small className='text-xl'>Instagram</small> </Link>
                        <Link className='flex text-xl'> <FaTwitter></FaTwitter> <small className='text-xl'>Twitter</small> </Link>


                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Chef Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;