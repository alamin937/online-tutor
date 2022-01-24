import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DeleteTeacher.css'
const DeleteTeacher = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() =>{
        fetch('https://morning-citadel-15634.herokuapp.com/teacher')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])


    const handleDelete = id =>{
        const main = window.confirm("You Want To Delete")
        if(main) {
            fetch(`https://morning-citadel-15634.herokuapp.com/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert("delete successfully")
                const remaining = teachers.filter(teacher => teacher._id !==id)
                setTeachers(remaining);
            }
        })
        }
    }





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
                       <Button onClick={() => handleDelete(teacher._id)} style={{width:'100%', marginBottom:'10px', borderRadius:'20px'}}>Delete Teacher</Button>
                    </div>
                    
                </div>)
            }
            
        </div>
    );
};

export default DeleteTeacher;