import React from 'react';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section4 = () => {
    return (
        <section id="section_five">
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="eco_left_phone">
                            <img src={require('../../assets/eco_mobile.png').default} alt="Eco-mobile" />
                        </div>
                    </Col>
                    <Col md={8} sm={12}>
                    <div className="eco_content_outer">
                    <h2 className="eco_title">The Voltcoin ecosystem</h2>
                    <h3>Voltcoin is an arcade game multiverse that features multiple mobile games built on the Ethereum blockchain.
                        Users can visit the platform and choose from a wide range of games and begin playing to earn. </h3>
                        <p>For a start, the following games will be available on the Voltcoin ecosystem:</p>
                        <ul>
                        <li>A platform jump game named “Crypto Jump”</li>
                        <li>A platform run game named “Crypto Run”</li>
                        <li>A space shooting game named “Crypto Space”</li>

                        </ul>
                    </div>
                    <div className="eco_images">
                        <a href="#" className="eco_app"><img src={require('../../assets/eco_img1.png').default} alt="Eco-image" /></a>
                        <a href="#"><img src={require('../../assets/eco_img2.png').default} alt="Eco-image2" /></a>
                    </div>
                    </Col>
                </Row>
            </Container>     
        </section>
    )
}

export default Section4
