import React, { useEffect, useState } from 'react';
import Footer from '../../../../components/Home/Footer/Footer';
import NavArea from '../../../../components/Home/NavArea/NavArea';

const Tuition = () => {
    const [tuitions, setTuitions] = useState([])
    
    useEffect(() =>{
        fetch('http://localhost:5000/student')
        .then(res => res.json())
        .then(data => setTuitions(data))
    },[])



    return (
       <div>
           <NavArea></NavArea>
            <div style={{width:'80%', margin:'0 auto'}}>
            {
                tuitions.map(tuition => 
                <div style={{border:'1px solid grey', marginTop:'10px', padding:'20px 10px', borderRadius:'10px', backgroundColor:'#20315D', color:'white'}}>
                    <h3>{tuition.description}</h3>
                    <div style={{display:'flex', margin:'20px 0'}}>
                        <h6><span>Class:</span>{tuition.class}</h6>
                        <h6 style={{marginLeft:'20px'}}><span>Salary:</span>{tuition.salay}</h6>
                    </div>
                    <h5>Subject: {tuition.subjects}</h5>
                    <h5>Time: {tuition.time}</h5>
                    <h5>Address: {tuition.address}</h5>
                    <h5>Phone: {tuition.phone}</h5>
                </div>)
            }
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Tuition;