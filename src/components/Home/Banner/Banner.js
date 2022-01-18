import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
           <div style={{width:'80%', margin:'0 auto'}}>
           <Row>
                <Col style={{display:'flex', alignItems:'center', justifyContent:'center'}} sm={12} md={6}>
                    <div style={{textAlign:'left'}}>
                    <h1 style={{color:'white', fontWeight:'700'}}> Your Bright Future Is <br /> Our Mission</h1>
                    <Button style={{padding:'10px 50px', fontWeight:'700', borderRadius:'30px', backgroundColor:'#343C4D ', marginTop:'20px', marginBottom:'20px'}}>Apply Now</Button>
                    </div>
                </Col>
                <Col className='ban-img' sm={12} md={6}>
                    <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />
                </Col>
            </Row>
           </div>
        </div>
    );
};

export default Banner;