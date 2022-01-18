import React from 'react';
import './Help.css'

const Help = () => {
    return (
        <div className='he'>
            <h1 style={{marginBottom:'60px', fontWeight:'700',textAlign:'center'}}>I Can Help You With</h1>
            <div className='help'>
                <div className='main'>
                    <span><i class="fas fa-graduation-cap"></i></span>
                    <h2>1:1 Coaching</h2>
                    <p>Business Consultancy International is your gateway to a successful future in business consulting.</p>
                </div>
                <div className='main'>
                    <span><i class="fas fa-graduation-cap"></i></span>
                    <h2>1:1 Consultation</h2>
                    <p>Business Consultancy International is your gateway to a successful future in business consulting.</p>
                </div>
                <div className='main'>
                    <span><i class="fas fa-graduation-cap"></i></span>
                    <h2>1:1 Life Programs</h2>
                    <p>Business Consultancy International is your gateway to a successful future in business consulting.</p>
                </div>
            </div>
        </div>
    );
};

export default Help;