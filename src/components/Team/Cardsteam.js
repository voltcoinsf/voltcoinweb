import React from 'react'

const Cardsteam = () => {
    return (
        <>
        <div className="row">
            <div className="col-sm-12">
            <div className="contact_content_outer">
            <h2>Our Team</h2>
            <p>Users can visit the platform and choose from a wide range of<br/> games and begin playing to earn.</p>
            </div>
            </div>
            </div>
            <div className="row team_outer">
            <div className="col-md-4 col-sm-12">
                <div className="member">
                <img src={require('../../assets/one.png').default} alt="1" />
                <h2>Sarah James</h2>
                <p>CEO, SEO, Manager</p>
                <div className="social_media">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-12">
            <div className="member">
            <img src={require('../../assets/two.png').default} alt="2" />
                <h2>Michael Thompson</h2>
                <p>Insurance Lead &amp; Financial Advisor</p>
                <div className="social_media">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="member">
                <img src={require('../../assets/three.png').default} alt="3" />
                <h2>Kate Toney</h2>
                <p>Member of the Oparation Board</p>
                <div className="social_media">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
                </div>
            </div>
        </>
        
    )
}

export default Cardsteam
