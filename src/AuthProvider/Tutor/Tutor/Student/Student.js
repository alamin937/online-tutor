import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../../../../components/Home/Footer/Footer';
import NavArea from '../../../../components/Home/NavArea/NavArea';

const Student = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://morning-citadel-15634.herokuapp.com/student',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Add Successfully")
                reset();
            }
        })
    };
    return (
       <div>
           <NavArea></NavArea>
            <div style={{ display: 'flex', alignItems:'center', justifyContent:'center', marginTop:'10px' }}>
           
           <div>
               <h1>Student Area Post a Tuition Jobs</h1>
               <div>
                   <form onSubmit={handleSubmit(onSubmit)}>
                       <label style={{fontWeight:'700', marginBottom:'5px'}}>Add Description</label> <br />
                       <textarea style={{width:'400px'}} {...register("description")} /> <br />
                       <label style={{fontWeight:'700'}}>Add Subjects</label> <br />
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'5px'}} {...register("subjects")} /> <br />
                       <label style={{fontWeight:'700'}}>Add Class</label> <br />
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'5px'}} {...register("class")} /> <br />
                       <label style={{fontWeight:'700'}}>Add Salary</label> <br />
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'5px'}} {...register("salay")} /> <br />
                       <label style={{fontWeight:'700'}}>Add Time</label> <br />
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'5px'}} {...register("time")} /> <br />
                       <label style={{fontWeight:'700'}}>Add Address</label> <br />
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'5px'}} {...register("address")} /> <br />
                       <label style={{fontWeight:'700'}}>Add Phone Number</label> <br />
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'5px'}} {...register("phone")} /> <br />
                       
                       <input style={{width:'400px',padding:'5px', borderRadius:'5px', border:'1px solid gray', marginTop:'10px'}} type="submit" />
                   </form>
               </div>
           </div>
       </div>
       <Footer></Footer>
       </div>
    );
};

export default Student;