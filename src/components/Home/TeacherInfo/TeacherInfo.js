import React, { useEffect, useState } from 'react';
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
                        <h5>Teaching: {teacher.teaching}</h5>
                        <h5>Location: {teacher.location}</h5>
                        <h5>Salary: {teacher.salary}</h5>
                        <h5>Number: {teacher.number}</h5>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TeacherInfo;