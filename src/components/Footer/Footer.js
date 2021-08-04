import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row footer_row">
                <div className="col-md-3">
                        <div className="footer_logo"><a href="#"><img src={require('../../assets/footer_logo.png').default} alt="1" /></a>
                        </div>
                        <div className="footer_email"><a href="mailto:voltcoin@company.com">voltcoin@company.com</a>
                        </div>
                        <div className="footer_phone"><a href="tel:648-145-8360">648-145-8360</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_menu_one footer_menu">
                            <h2>Quick Links</h2>
                            <ul className="menu_links list-unstyled">
                                <li><a href="#">How it Works</a></li>
                                <li><a href="#">Guarantee</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Report Bug</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_menu_one footer_menu">
                            <h2>About Us</h2>
                            <ul className="menu_links list-unstyled">
                                <li><a href="#">About Singleton</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_menu_one footer_menu">
                            <h2>Become A Member</h2>
                            <ul className="menu_links list-unstyled">
                                <li><a href="#">Contributor</a></li>
                                <li><a href="#">Union Member</a></li>
                                <li><a href="#">Processing</a></li>
                                <li><a href="#">Legal Action</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row footer_second">
                    <div className="col-md-6">
                    <div className="copyright">
                    © 2021 Volt Coin All Right Reserved
                </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer_icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
