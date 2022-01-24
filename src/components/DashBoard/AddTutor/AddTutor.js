import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import UseAuth from '../../../UseHooks/UseAuth';

const AddTutor = () => {
    const { user } = UseAuth()
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        fetch(`https://morning-citadel-15634.herokuapp.com/book/${user?.email}`)
            .then(res => res.json())
            .then(data => setTutors(data))
    }, [user?.email])


    const hancleDelete = id =>{
        const main = window.confirm("Are You Sure You Want To Delete")
        if(main){
            fetch(`https://morning-citadel-15634.herokuapp.com/book/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert("deleted Successfully")
                const remaining = tutors.filter(tutor => tutor._id !==id)
                setTutors(remaining);
            }
        })
        }
    }




    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Teacher Id</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Phone</th>
                        <th>Teacher Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tutors.map(tutor => (
                            <tr>
                                <td>{tutor._id}</td>
                                <td>{tutor.userName}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.userPhone}</td>
                                <td>{tutor.teacherName}</td>
                                <td><Button onClick={() =>hancleDelete(tutor._id)}>Remove</Button> </td>
                            </tr>
                        ))
                    }





                </tbody>
            </Table>
        </div>
    );
};

export default AddTutor;