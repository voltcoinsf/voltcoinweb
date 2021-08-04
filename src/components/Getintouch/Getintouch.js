import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Getintouch = () => {
    return (
        <>
        
        <Row className ="container_max">
            <Col sm={12}>
                <div className="contact_content_outer">
                    <h2>Get In Touch</h2>
                    <p>vel modus honestatis ad, vim an vidi<br/>t aliquam instructior. Alii efficiendi intellegebat nec ea, mea elitr interesset ea</p>
                </div>
                <form>
                    <div class="form-row">
                        <Col>
                            <input type="text" class="form-control" id="first_name" placeholder="First Name" name="first"></input>
                        </Col>
                        <Col>
                            <input type="text" class="form-control" id="last_name" placeholder="Last Name" name="last"></input>
                        </Col>
                    </div>
                    <div class="form-row">
                        <Col>
                        <input type="email" class="form-control" id="email" placeholder="Email Address" name="email"></input>
                        </Col>
                        <Col>
                        <input type="tel" class="form-control" id="phone" placeholder="Phone Number" name="phone"></input>
                        </Col>
                    </div>
                    <div class="form-row">
                        <Col>
                        <textarea class="form-control" id="message" placeholder="Your Message" name="message"rows="6 " cols="50"></textarea>
                        </Col>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </Col>
        </Row>    
        
        </>
    )
}

export default Getintouch
