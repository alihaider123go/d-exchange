import React from "react";
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter,FaPinterestP } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage:"url('assets/img/footer-bg.png')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.2s">
                        <div className="top-footer">
                            <div className="logo">
                                <img src="assets/img/logo.png" alt="logo"/>
                            </div>
                            <a href="/" className="button-1">Get In Touch</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <div className="footer-box">
                            <h4 className="lasthead">Company</h4>
                            <ul className="footer-link">
                                {
                                    ['About Us', 'Contact Us', 'Blog', 'Affiliate'].map((item,index)=>(
                                        <li key={item +'_footer_link_'+ index}>
                                            <a href="#">{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
                        <div className="footer-box">
                            <h4 className="lasthead">Support</h4>
                            <ul className="footer-link">
                                {
                                    ['FAQ', 'Contact Time', 'How its work', 'Details'].map((item,index)=>(
                                        <li key={item +'_footer_link_'+ index}>
                                            <a href="#">{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
                        <div className="footer-box">
                            <h4 className="lasthead">Policy</h4>
                            <ul className="footer-link">
                                {
                                    ['Terms Of use', 'Privacy Policy', 'Refunds Policy', 'Money Type'].map((item,index)=>(
                                        <li key={item +'_footer_link_'+ index}>
                                            <a href="#">{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
                        <div className="footer-box">
                            <h4 className="lasthead">Newsletter</h4>
                            <form action="#">
                                <div className="form-group">
                                    <input type="email" placeholder="Enter email address" />
                                    <button type="submit" className="button-1">Join now</button>
                                </div>
                            </form>
                            <div className="social-style">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaPinterestP />
                                </a>
                                <a href="#">
                                    <FaGooglePlusG />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
                        <div className="footer-bottom">
                            <p className="text">
                                Copyright &copy; <a href="#">alihaider123go</a> | <a href="#">2024</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
