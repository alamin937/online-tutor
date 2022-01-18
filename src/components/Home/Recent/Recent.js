import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Recent.css'

const Recent = () => {
    return (
        <div  style={{width:'80%', margin:'0 auto', marginTop:'30px'}}>
           <div className='pe'>
           <h1 style={{textAlign:'center'}}>Recent Courses</h1>
            <p>You can quickly and easily create & sell courses online, easily create education, online-course websites with no coding-knowledge required.</p>
           </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card style={{borderRadius:'30px'}}>
                            <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHV0b3J8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                               
                                <Card.Text style={{fontWeight:'700'}}>
                                Discover Yourself: Values, Strengths, Vision, EQ, and more
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{borderRadius:'30px'}}>
                            <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHR1dG9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                
                                <Card.Text style={{fontWeight:'700'}}>
                                Life Mastery Be Happy Healthy and Successful Simplified
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{borderRadius:'30px'}}>
                            <Card.Img style={{borderRadius:'30px'}} variant="top" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1dG9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                
                                <Card.Text style={{fontWeight:'700'}}>
                                Productivity Masterclass How To Powerfully Get Things Done
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Recent;