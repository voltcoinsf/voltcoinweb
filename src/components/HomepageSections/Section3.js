import React from 'react';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section3 = () => {
    return (
        <section id="section_four">
            <Container>
                <Row className="problem_outer">
                    <Col md={6} sm={12}>
                    <div className="problem">
                        <h2 className="problem_tag">The Problem</h2>
                        <h3>Despite the huge strides made in gaming,there is a pertinent underlying issue that continues to stifle the industry’s development and curtail its elevation to a significant economic sector on its own</h3>
                    </div>
                    </Col>
                    <Col md={6} sm={12}>
                    <div className="problem_desc">
                        <h2>Problem Describing</h2>
                        <p>The gaming industry revenue model is skewed in favor of developers and the big corporations that control a huge market share. These organizations get a huge share of the revenues generated in online gaming while only a few players earn any substantial revenue.</p>
                        <p>Only a handful of skilled gamers can monetize their skills while the rest are reduced to mere participants.
                        Even worse, players are forced to spend billions of dollars for in-game purchases to unlock various levels, weapons,and other necessary tools depending on the type of game. These purchases are often worthless as they have no value outside the game and even then cannot be traded for anything meaningful.</p>
                    </div>
                    </Col>
                </Row>
                <Row className="row solution_outer">
                    <Col md={6} sm={12}>
                        <div className="solution">
                            <h2 className="solution_tag">The Voltcoin ecosystem</h2>
                            <h3>Voltcoin is taking a technological approach to address these systemic issues and ensure gaming is fun and rewarding.</h3>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="solution_desc">
                            <h2>The Voltcoin solution</h2>
                            <p>Firstly, all games on Voltcoin will be free to play thus eliminating the problem of requiring users to pay. Secondly, the platform will incentivize its players by adopting a play to earn model rather than the pay to win concept employed by legacy gaming platforms.</p>
                            <p>These solutions will be enabled by the integration of blockchain technology in the Voltcoin ecosystem.This will allow users to play casual arcade games on their phones and earn the platform’s game tokens (Volt Power) for achieving various milestones during gameplay. In conventional games, users are usually awarded certain assets like gold coins for completing specific tasks or challenges. But, these assets are usually worthless.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section3






