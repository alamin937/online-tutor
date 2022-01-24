import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import NavArea from '../../../../components/Home/NavArea/NavArea';

const Request = () => {
    const [name, setName] = useState('');
    const [qualification, setQualification] = useState('');
    const [teaching, setTeaching] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [number, setNumber] = useState('');
    const [img, setImg] = useState(null)


    const handleSubmit = e => {
        e.preventDefault();
        if (!img) {
            return;
        }


        const formData = new FormData();
        formData.append('name', name);
        formData.append('qualification', qualification);
        formData.append('teaching', teaching);
        formData.append('location', location);
        formData.append('salary', salary);
        formData.append('number', number);
        formData.append('img', img);

        fetch('https://morning-citadel-15634.herokuapp.com/teacher', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Teacher Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });



    }





    return (
        <div>
            <NavArea></NavArea>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                <div style={{ backgroundColor: 'black', padding: '40px 10px', color: 'white' }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={e => setName(e.target.value)} style={{ width: '350px' }} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control onChange={e => setQualification(e.target.value)} style={{ width: '350px' }} type="text" placeholder="Enter Qualification" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Teaching</Form.Label>
                            <Form.Control onChange={e => setTeaching(e.target.value)} style={{ width: '350px' }} type="text" placeholder="Enter Teaching" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control onChange={e => setLocation(e.target.value)} style={{ width: '350px' }} type="text" placeholder="Enter Location" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Expected Salary</Form.Label>
                            <Form.Control onChange={e => setSalary(e.target.value)} style={{ width: '350px' }} type="text" placeholder="Enter Salary" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={e => setNumber(e.target.value)} style={{ width: '350px' }} type="text" placeholder="Enter Number" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image Upload</Form.Label>
                            <Form.Control onChange={e => setImg(e.target.files[0])} accept='image/*' type="file" />
                        </Form.Group>
                        <Button style={{ width: '350px' }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Request;