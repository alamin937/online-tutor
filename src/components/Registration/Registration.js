import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';

const Registration = () => {
    const { register, user,error } = UseAuth()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handle = e => {
        e.preventDefault()
        register(email, password, name)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px', backgroundColor: '' }}>
            <div style={{ backgroundColor: '#2B3E6C', padding: '60px 40px', borderRadius: '20px' }}>
                <h1 style={{ marginBottom: '20px', color: 'white' }}>Create Account</h1>

                <form onSubmit={handle}>
                    <input onChange={e => setName(e.target.value)} style={{ width: '280px', marginTop: '10px', padding: '5px 2px', border: '1px solid grey', borderRadius: '5px' }} type="name" placeholder='Name' required /><br />
                    <input onChange={e => setEmail(e.target.value)} style={{ width: '280px', marginTop: '10px', padding: '5px 2px', border: '1px solid grey', borderRadius: '5px' }} type="email" placeholder='Email' required /><br />
                    <input onChange={e => setPassword(e.target.value)} style={{ width: '280px', marginTop: '10px', padding: '5px 2px', border: '1px solid grey', borderRadius: '5px' }} type="password" placeholder='Password' required /><br />
                    <Button style={{marginTop:'10px', width:'280px'}} type='submit'>Register</Button>
                </form>
                <p style={{ color: 'white', marginTop: '20px' }}>Already Register Please <Link style={{ color: 'white', fontWeight: '700' }} to='/login'>Login</Link></p>
                {user?.email && <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration Successfully</Modal.Title>
                    </Modal.Header>
                </Modal.Dialog>}

               <h3 style={{fontSize:'15px',color:'white'}}>{error}</h3>
            </div>
        </div>
    );
};

export default Registration;