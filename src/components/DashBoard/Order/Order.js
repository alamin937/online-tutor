import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Order = () => {
    
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        fetch("https://morning-citadel-15634.herokuapp.com/book")
            .then(res => res.json())
            .then(data => setTutors(data))
    }, [])


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
            <Table responsive striped bordered hover variant="dark">
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

export default Order;