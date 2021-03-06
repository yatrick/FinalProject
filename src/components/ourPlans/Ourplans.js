import React from 'react';
import { Row, Col, Card, Button, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

const Ourplans= () => (
    <div className="ourplans1">
    <Row className="d-flex justify-content-center">
        
        <div className="ourplans2 d-flex justify-content-center mb-4">
        <Col md="9">
            <h2 className="d-flex justify-content-center mt-3"><bold> Our plans</bold> </h2>
            <h4 className="d-flex justify-content-center mb-4">There is so much more we want to tell you about.</h4>
            <div>
            <CardDeck id="cards">
                 <Card className="content">
                    <CardBody>
                    <CardTitle className="d-flex justify-content-center">Free</CardTitle>
                    <CardSubtitle className="d-flex justify-content-center mb-4">For viewers and art lovers</CardSubtitle>
                    <CardText className="d-flex justify-content-center">
                         <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Unlimited video views</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Video on demand access</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Rate your favorite videos</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Limited to one upload every 
                            two monts</li>
                        </ul>
                    </CardText>
                    <Button className="bntregister d-flex align-items-end">Register</Button>
                    </CardBody>
                </Card>
                <Card className="content">
                    <CardBody>
                    <CardTitle className="d-flex justify-content-center">Creative</CardTitle>
                    <CardSubtitle className="d-flex justify-content-center mb-4">For ambitious creative prodeucers and dreamers</CardSubtitle>
                    <CardText className="d-flex justify-content-center">
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>artLOcus demographic statistics</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Upload video on demand content</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>DRM managent</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Limited to one upload every month</li>
                        </ul>
                    </CardText>
                    <Button className="bntregister mr-4">Subscribe</Button>
                    </CardBody>
                </Card>
                   <Card className="content">
                    <CardBody>
                    <CardTitle className="d-flex justify-content-center">PRO</CardTitle>
                    <CardSubtitle className="d-flex justify-content-center mb-4">Company plans for the creative industry</CardSubtitle>
                    <CardText className="d-flex justify-content-center">
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Subscription or monetization plans</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Promotion in the artLocus selection</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Parnership</li>
                            <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Unlimited uploads</li>
                        </ul>
                    </CardText>
                    <Button className="bntregister mr-4">Read more</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            </div>
            <span className="d-flex justify-content-center mt-3 mb-3"> Already a member?  <button className="ml-2 mb-3">Read more</button> </span>
            </Col>
         </div >
    </Row>
    </div>
)

export default Ourplans;