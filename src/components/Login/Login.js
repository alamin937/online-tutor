import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';

const Login = () => {
    const {login,error} = UseAuth()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    let navigate = useNavigate();
    let location = useLocation();

    const handleLogin = e =>{
        e.preventDefault()
        login(email, password, navigate, location)
 }



    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px', backgroundColor: '' }}>
            <div style={{ backgroundColor: '#2B3E6C', padding: '60px 40px', borderRadius: '20px' }}>
                <h1 style={{ marginBottom: '20px', color: 'white' }}>Login Here</h1>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{color:'white'}}>Email address</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} style={{width:'300px'}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{color:'white'}}>Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{width:'300px'}} variant="primary" type="submit">
                       Log In
                    </Button>
                </Form>
                <p style={{ color: 'white', marginTop: '20px' }}>Not Register Please <Link style={{ color: 'white', fontWeight: '700' }} to='/registration'>Registration</Link></p>
                <h3 style={{fontSize:'15px',color:'white'}}>{error}</h3>
            </div>
        </div>
    );
};

export default Login;