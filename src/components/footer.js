import React from "react";

import '../css/footer.css';
import Image from '../images/short-logo.png'


function Footer(){
    return(
        <footer>
            <div className="main-container">
                    <div className="footer-container">
                        {/* Column 1 */}
                        <div className="footer-item">
                            <h5>We are located at</h5>
                            <ul>
                                <li>283/7A, Port City, Gallface Road,<br/>Colombo 2.</li>
                            </ul>
                            <br/>
                            <h5>Contact Us</h5>
                            <ul className="">
                                <li>011-6871299</li>
                                <br/>
                                <li>centhora-hotels@gmail.com</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="footer-item">
                            <h5>About Us</h5>
                            <ul>
                                <li><a href="#">Who we are?</a></li>
                                <li><a href="#">Our mission</a></li>
                                <li><a href="#">Our service</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="footer-item">
                            <h5>Keep in touch</h5>
                            <ul>
                                <li><a href="https://www.facebook.com/">Facebook</a></li>
                                <li><a href="https://www.instagram.com/">Instagram</a></li>
                                <li><a href="https://twitter.com/">Twitter</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="row">
                        {/* Footer bottom */}
                        <div className="row2">
                            <hr className="line"></hr>
                            <img src={Image} alt="logo"></img>
                            <hr className="line"></hr>
                        </div>
                        <div className="tail">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} Centhora Hotels Sri Lanka - All Rights Reserved
                            </p>
                        </div>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;

