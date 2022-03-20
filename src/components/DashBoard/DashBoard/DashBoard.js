import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';
import Footer from '../../Home/Footer/Footer';
import NavArea from '../../Home/NavArea/NavArea';
import './DashBoard.css'

const DashBoard = () => {
    const {admin} = UseAuth()
    return (
       <div >
           <NavArea></NavArea>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'40px'}}>
           <div>
           <div className='dashboard'>
             <Link to="/dashboard/addtutor">My Booked Information</Link>
             {admin && <>
                <Link to="/dashboard/addadmin">Add Admin</Link>
             <Link to="/dashboard/addorder">All Book Information</Link>
             <Link to="/dashboard/deleteteacher">Manage Teacher</Link>
             </> }
            </div>
            <div style={{textAlign:'center', marginTop:'50px'}}>
            <Outlet />
            </div>
           </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default DashBoard;