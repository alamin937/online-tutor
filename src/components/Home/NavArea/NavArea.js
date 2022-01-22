import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';
import './NavArea.css'

const NavArea = () => {
  const { user, logOut } = UseAuth()
  return (
    <>
      <Navbar bg="dark" sticky="top" className='im' variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{width:'50%'}} src='data:image/jpeg;base64,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' alt='' />
          </Navbar.Brand>
         
            <Nav className="nav">
              <NavLink to='/home'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/request'>Request For Tutor</NavLink>
              <NavLink to='/student'>Student</NavLink>
              <NavLink to='/jobs'>Tutor Jobs</NavLink>

              {
                user?.email ? <div>
                  <NavLink to='/dashboard'>DashBoard</NavLink>
                  <Button style={{ marginLeft: '10px', fontWeight: '500' }} onClick={logOut}>Log Out</Button> 
                </div>:

                  <div>
                    
                    <NavLink to='/login'>Login</NavLink>
                  </div>
              }
              <span style={{ color: 'white', marginLeft: '15px', fontSize: '22px' }}>{user?.displayName}</span>
            </Nav>
         
        </Container>
      </Navbar>
    </>
  );
};

export default NavArea;

