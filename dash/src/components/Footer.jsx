import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {

    const backToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <>
            <footer id="colophon" className="site-footer footer-primary">
                <div className="footer-overlay" />
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 pe-lg-4">
                                <aside className="widget widget_text img-textwidget">
                                    <div onClick={backToTop} className="footer-logo img">
                                        <Link to="#"><img src="OJP_LOGO.png" alt="logo" /></Link>
                                    </div>
                                    <div className="textwidget widget-text">
                                        "Contact Us: Reach Out for
                                        Inquiries, Support,
                                        Collaboration, Opportunities."
                                    </div>
                                </aside>
                                <div className="footer-social-links">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className="fab fa-twitter" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i className="fab fa-youtube" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <aside className="widget">
                                    <h3 className="widget-title">Useful Links</h3>
                                    <ul>
                                        <li>
                                            <NavLink onClick={backToTop} to="/about">About us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={backToTop} to="/career">Careers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={backToTop} to="#">News &amp; Articles</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={backToTop} to="/privacypolicy">Legal Notice</NavLink>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <aside className="widget">
                                    <h3 className="widget-title">Support</h3>
                                    <ul>
                                        <li>
                                            <NavLink onClick={backToTop} to="#">Help Center</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={backToTop} to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={backToTop} to="#">Payment Center</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={backToTop} to="#">Parent Community</NavLink>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <aside className="widget widget_text">
                                    <h3 className="widget-title">Contact Information</h3>
                                    <p>Feel free to contact and reach us !</p>
                                    <div className="textwidget widget-text">
                                        <ul>
                                            <li>
                                                <i aria-hidden="true" className="icon icon-map-marker1" />
                                                Gurugram, sec 18 plot 16.
                                            </li>
                                            <li>
                                                <a href="tel:+1456657887">
                                                    <i aria-hidden="true" className="icon icon-phone1" />
                                                    Telephone : +1(91) 657 8871
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailtop:info@domain.com">
                                                    <i aria-hidden="true" className="icon icon-envelope1" />
                                                    <span className="__cf_email__" data-cfemail="452c2b232a05212a28242c2b6b262a28">company@domain.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="copy-right text-center">Copyright © 2024 onlinejobportal . All rights reserved</div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;
