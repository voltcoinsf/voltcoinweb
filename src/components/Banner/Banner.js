import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <section id="section_one">
            <Container className="h-100">
                <Row className="row justify-content-center align-items-center h-100">
                    <Col sm={12} md={9}>
                    <Fade left delay={500} damping={6}>
                        <div className="banner_content_outer">
                        <Fade><h1 className="banner_title"><span>Voltcoin</span> is a blockchain-based gaming platform that is redefining how mobile arcade games are played</h1></Fade>
                        <h2 className="banner_content">Redefining the way Mobile Arcade Games are played; From “Pay to Win” to “Play to Earn.”</h2>
                        </div>
                        <div className="banner_buttons">
                            <a href="#" className="order_btn">Pre-Order</a>
                            <a href="#" className="watch_btn">Watch Video</a>
                        </div>
                    </Fade>
                    </Col>
                    <Col sm={12} md={3} >
                        <div className="banner_right_phone">
                        <Fade up delay={1000} damping={6}>
                            <Image src={require('../../assets/banner_image.png').default}  fluid />
                        </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
