import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Instructor.css'

const Instructor = () => {
    return (
      <div style={{backgroundColor:'#171E2F', padding:'50px 0', marginTop:'40px'}}>
            <div style={{width:'80%', margin:'0 auto'}}>
            <Row>
                <Col style={{color:'white'}} className='instructor' sm={12} md={6}>
                    <h1>Like To Become An Instructor ?</h1>
                    <p style={{fontWeight:'700'}}>Some teachers enter the profession because they're eager to make a difference. People tend to remember their teachers for an entire lifetime, long after school is over.</p>
                    <Button> Get Instant Access</Button>
                </Col>
                <Col sm={12} md={6}>
                    <img style={{width:'80%'}} src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.2.1115352725.1640995200' alt='' />
                </Col>
            </Row>
        </div>
      </div>
    );
};

export default Instructor;