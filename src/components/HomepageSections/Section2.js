import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

const Section2 = () => {
    return (
        <section id="section_three">
        <Container>
            <Row>
                <Col lg={7} sm={12}>
                <Fade left>
                     <Row>
                        <Col sm={2}>
                            <div className="token_number">
                                 01
                            </div>
                        </Col> 
                        <Col sm={10}>
                            <div className="token_number">
                                <div className="token_right">
                                <h2 className="token_title">Tokenomics</h2>
                                <p>The platform has its native cryptocurrency,<span> $Volt Coin </span>, an ERC20 token on the Ethereum blockchain.
                                    <span>$Volt Coin </span>will serve as a utility token that is used as the sole medium exchange in the Voltcoin multiverse.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Fade>
                    <Row>
                        <Col sm={2}>
                            <div className="token_number">
                                 02
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className="token_right">
                                <h2 className="token_title">Token parameters</h2>
                                <ul>
                                    <li>Name: <span>$Volt Coin</span></li>
                                    <li>Ticker: <span>VOLT</span></li>
                                    <li>Supply: <span>2,000,000,000</span></li>
                                    <li>ICO Start: <span>TBD</span></li>
                                    <li>ICO End: <span>TBD</span></li>
                                </ul>
                                <ul>
                                    <li>ICO Tokens: <span>500,000,000</span></li>
                                    <li>Accepting: <span>ETH, BTC</span></li>
                                    <li>Exchange Rate: <span>1 VOLT - $0.005</span></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <div className="token_number">
                                 03
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className="token_right">
                                <h2 className="token_title">Tokenomics</h2>
                                <ul>
                                <li>ICO - 5%</li>
                                <li>Gaming rewards – 45%</li>
                                <li>Future development -5 %</li>
                                <li>Team and Advisors – 25%</li>
                                <li>Liquidity - 20%</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} sm={12}>
                    <div className="token_right_img_outer">
                        <img src={require('../../assets/token_right_img.png').default} alt="token_right_img" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h2 className="market_title">The Market</h2>
                    <div className="market_first_row container_max">
                        <h3>Online gaming has been growing consistently over the past few years and is expected to keep its upward momentum in the foreseeable future
                        due to increasing popularity. </h3>
                        <p>The global <span>gaming market</span> was valued at US$ 167.9 Billion in 2020 and is expected to rise to US$ 287.1 Billion in
                        2026 by growing at a forecasted CAGR of 9.24% during this period. Moreover,
                        there are over 2 billion players globally which loosely translates to 1 in every 4 people in the world is a gamer.</p>
                    </div>
                </Col>
            </Row>
            <Row className="row market_second_outer container_max">
                <Col sm={2} className="d-flex justify-content-center align-items-center">
                     <img src={require('../../assets/icon1.png').default} alt="phone" />
                </Col>
                <Col sm={10}>
                     <p>This enormous growth is fuelled by various factors. Key among them is the growing shift from physical games to esports lately, especially among younger users. The growing popularity of online games is also fuelled by the increased smartphone and internet penetration allowing millions of users to play these games on the phone. Additionally, recent innovations in hardware and software have also improved accessibility and the gaming experiences contributing to the uptake of online gaming.</p>
                </Col>
            </Row>
            <Row className="row market_second_outer container_max">
                <Col sm={2} className="d-flex justify-content-center align-items-center">
                     <img src={require('../../assets/icon2.png').default} alt="phone" />
                </Col>
                <Col sm={10}>
                    <p>Game developers are also rapidly adopting new technologies and making new advancements to improve the experience and make gaming more immersive.
                    They are incorporating technologies such as virtual reality and blockchain technology to improve the gaming experience.</p>
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default Section2
