import React from 'react';
import './Client.css'

const Client = () => {
    return (
        <div className='bg'>
           <div className='client'>
           <div>
                <span><i class="fas fa-graduation-cap"></i></span>
                <h1>81</h1>
                <h4>Happy Client</h4>
            </div>
            <div>
                <span><i class="fas fa-house-user"></i></span>
                <h1>10</h1>
                <h4>Online Courses</h4>
            </div>
            <div>
                <span><i class="fas fa-users"></i></span>
                <h1>810</h1>
                <h4>Client Support</h4>
            </div>
            <div>
                <span><i class="fas fa-graduation-cap"></i></span>
                <h1>1200</h1>
                <h4>Coaching Teacher</h4>
            </div>
           </div>
        </div>
    );
};

export default Client;