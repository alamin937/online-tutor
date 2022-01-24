import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeacherInfo.css'

const TeacherInfo = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() =>{
        fetch('https://morning-citadel-15634.herokuapp.com/teacher')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])


    return (
        <div className='grid'>
            
            {
                teachers.map(teacher =>
                 <div className='teacher'>
                    <div>
                        <img src={`data:image/*;base64,${teacher.img}`} alt='' />
                    </div>
                    <div style={{textAlign:'left', marginTop:'10px'}}>
                        <h5>Name: {teacher.name}</h5>
                        <h5>Qualification: {teacher.qualification}</h5>
                       
                        <Link to={`/book/${teacher._id}`}><Button style={{width:'100%', marginBottom:'10px', borderRadius:'30px'}}>View Details</Button> </Link>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default TeacherInfo;