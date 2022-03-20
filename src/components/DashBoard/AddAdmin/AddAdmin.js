import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = e =>{

        const user = {email}
        
        fetch('https://morning-citadel-15634.herokuapp.com/users/admin', {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                alert("Add Admin Successfully")
                
            }
        })
        

        e.preventDefault()
    }



    return (
        <div>


                <form onSubmit={handleSubmit}>
                    <input onChange={e => setEmail(e.target.value)} style={{width:'300px',padding:'10px 7px', border:'1px solid grey', borderRadius:'5px'}} type='text' placeholder='Add Admin' /> <br />
                    <button  style={{width:'300px', marginTop:'10px', backgroundColor:'blue', color:'white', fontWeight:'700'}} type='submit'>Add Admin</button>
                </form>


               


        </div>
    );
};

export default AddAdmin;