import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import NavArea from '../../Home/NavArea/NavArea';
import './DashBoard.css'

const DashBoard = () => {
    return (
       <div>
           <NavArea></NavArea>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'40px'}}>
           <div>
           <div className='dashboard'>
             <Link to="/dashboard/addtutor">Add Tutor</Link>
             <Link to="/dashboard/addadmin">Add Admin</Link>
             <Link to="/dashboard/addorder">orders</Link>
            </div>
            <div style={{textAlign:'center', marginTop:'50px'}}>
            <Outlet />
            </div>
           </div>
        </div>
       </div>
    );
};

export default DashBoard;