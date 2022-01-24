import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import UseAuth from '../UseHooks/UseAuth';

const Book = () => {
    const {user} = UseAuth()
    const [teachers, setTeachers] = useState([])
    const { bookId } = useParams()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://morning-citadel-15634.herokuapp.com/book',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Teacher Book Successfully')
                reset()
            }
        })
    };


    useEffect(() => {
        fetch(`https://morning-citadel-15634.herokuapp.com/teacher/${bookId}`)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [bookId])



    return (
        <div style={{width:'80%', margin:'0 auto', marginTop:'50px'}}>
            <Row>
                <Col sm={12} md={6}>
                    <div style={{border:'2px solid grey', textAlign:'center',padding:'10px 20px', marginBottom:'10px', borderRadius:'20px'}}>
                        <img style={{borderRadius:'20px'}} src={`data:image/*;base64,${teachers.img}`} alt='' />
                       <div style={{textAlign:'left'}}>
                       <h4>Teacher Name : {teachers.name}</h4>
                        <h6>Teacher Id: {bookId}</h6>
                        <h5>Qualification: {teachers.qualification}</h5>
                        <h5>Teaching: {teachers.teaching}</h5>
                        <h5>Location: {teachers.location}</h5>
                        <h5>Salary: {teachers.salary}</h5>
                       </div>
                    </div>
                </Col>
                <Col  sm={12} md={6}>
                  <div style={{border:'2px solid grey', padding:'20px 20px', borderRadius:'20px'}}>
                  <h1>Book Your Teacher</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label style={{fontWeight:'700', marginBottom:'10px'}}>User Name</label><br />
                            <input defaultValue={user?.displayName} style={{width:'250px',padding:'5px', borderRadius:'5px', border:'1px solid red'}} {...register("userName")} /><br />
                            <label style={{fontWeight:'700', marginBottom:'10px'}}>User Email</label><br />
                            <input defaultValue={user?.email} style={{width:'250px',padding:'5px', borderRadius:'5px', border:'1px solid red'}} {...register("email")} /><br />
                            <label style={{fontWeight:'700', marginBottom:'10px'}}>User Phone</label><br />
                            <input style={{width:'250px',padding:'5px', borderRadius:'5px', border:'1px solid red'}} {...register("userPhone")} /><br />
                            <label style={{fontWeight:'700', marginBottom:'10px'}}>Teacher Name</label><br />
                            <input style={{width:'250px',padding:'5px', borderRadius:'5px', border:'1px solid red'}} {...register("teacherName")} /><br />
                            <label style={{fontWeight:'700', marginBottom:'10px'}}>Teacher Id</label><br />
                            <input style={{width:'250px',padding:'5px', borderRadius:'5px', border:'1px solid red'}} {...register("teacherId")} /><br />
                           
                            <input style={{width:'250px',padding:'5px', borderRadius:'5px', marginTop:'10px', border:'1px solid red'}} type="submit" />
                        </form>
                        <Link to='/dashboard'><Button style={{marginTop:'10px', width:'250px'}}>Go To DashBoard</Button> </Link>
                    </div>
                  </div>
                </Col>
            </Row>
        </div>
    );
};

export default Book;