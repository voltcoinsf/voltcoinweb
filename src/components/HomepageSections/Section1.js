import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

const Section1 = () => {
    return (
        <section id="section_two">
        <Container>
             <Row className="map">
                <Col sm={12}>
                <Fade down delay={500} damping={5}>
                <h2>VoltCoin 2021 RoadMap</h2>
                </Fade>
                </Col>
             </Row>
             <Row className="road_map">
                <Col md={3} sm={12}>
                    <h3>Q1</h3>
                    <Fade up delay={500} damping={5}>
                    <p className="active">Concept Team Assembly</p>
                    </Fade>
                </Col>
                <Col md={3} sm={12}>
                    <h3>Q2</h3>
                    <Fade up delay={800} damping={5}>
                    <p>Concept Team Assembly White Paper Website creation Private presale</p></Fade>
                </Col>
                <Col md={3} sm={12}>
                    <h3>Q3</h3>
                    <Fade up delay={1000} damping={5}>
                    <p>team expansion marketing community growth limited public presale beta release one</p></Fade>
                </Col>
                <Col md={3} sm={12}>
                    <h3>Q4</h3>
                    <Fade up delay={1200} damping={5}>
                    <p>exchange listing beta release two first game release</p></Fade>
                </Col>
             </Row>
             <Row className="vision_row">
                <Col sm={12}>
                <h2 className="vision_title"><Fade down delay={1200} damping={5}>Mission &amp; Vision</Fade></h2>
                    <div className="vision_first_row container_max">
                        <Fade damping={5}>
                        <h3>At Voltcoin we are committed to providing a player-driven gaming ecosystem that is highly rewarding for all players.</h3>
                        <h4>Being gamers ourselves, we are building a mobile gaming platform for the gamers, by the gamers that allow anyone from anywhere in the world to earn by playing games on Voltcoin.</h4>
                        <p>At Voltcoin we are guided by a simple, yet quite ambitious vision that we always strive towards each day, which is: Redefining the way Mobile Arcade Games are played; From “Pay to Win” to “Play to Earn.”</p>
                        </Fade>
                    </div>
                </Col>
             </Row>
             <Row className="container_max">
                <Col md={4} sm={12}>
                    <div className="volt">
                    <Fade damping={5} delay={700}>
                        <img src={require('../../assets/img_one.png').default} alt="imageone" />
                        <h2>Some Headline</h2>
                        <p>VoltCoin &amp; receiving addresse as some <br/>well as transacted amounts.</p>
                    </Fade>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className="volt">
                        <Fade damping={5} delay={700}>
                        <img src={require('../../assets/img_two.png').default} alt="imagetwo" />
                        <h2>Another Headline here</h2>
                        <p>VoltCoin has striven to solve <br/>blockchain governance. </p>
                        </Fade>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className="volt">
                        <Fade damping={5} delay={700}>
                        <img src={require('../../assets/img_three.png').default} alt="img_three" />
                        <h2>Transparency &amp; Stability</h2>
                        <p>In crypto, transparency brings trust &amp; old<br/> strong transparency</p>
                        </Fade>
                    </div>
                </Col>
             </Row>
        </Container>
    </section>

    )
}

export default Section1
