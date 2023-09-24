import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Users() {
    
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [password, setPassword]=useState('')
    const [departname, setdepartname]=useState('')
    const [nationalid, setnationalid]=useState('')
   
const addUser = async (e) => {
    e.preventDefault();
  
    try {
  
        await axios.post('http://localhost:8001/addUser', {
            name:name,
            age:age,
            email: email,
            password: password,
            departname:departname,
            nationalid:nationalid
        }).then(res=>{
      
            console.log(res.data)
          })
        
    }
     catch (error) {
        if (error.response) {
          console.log(error)
          alert(JSON.stringify(error.response.data))
        }
    }
  
}
  return (
    <div className='container text-white bg-dark w-70 h-70 mt-5'>
    <form className='py-4'  onSubmit={addUser}>
<div className="mb-3 ">
<label for="exampleInputName1" className="form-label" placeholder='Enter Your Name'>Name</label>
<input onChange={(e) => setName(e.target.value)}  type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
</div>
<div className="mb-3 ">
<label for="exampleInputAge1" className="form-label" placeholder='Enter Your Age'>Age</label>
<input onChange={(e) => setAge(e.target.value)}  type="number" className="form-control" id="exampleInputAge1" aria-describedby="emailHelp"/>
</div>
<div className="mb-3 ">
<label for="exampleInputEmail1" className="form-label" placeholder='Enter Your Email'>Email address</label>
<input onChange={(e) => setEmail(e.target.value)}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" className="form-text text-primary">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label for="exampleInputPassword2" className="form-label" placeholder='Enter Your Password'>Password</label>
<input type="password" onChange={(e) => setPassword(e.target.value)}  className="form-control" id="exampleInputPassword2"/>
</div>
<div className='mb-3'>
<label for="exampleInputPassword1" className="form-label" placeholder='Enter Your Department'>Department Name</label><br></br>
<select name="Department" value={departname} className='p-2' onChange={(e) => setdepartname(e.target.value)}>
    <option >Department1</option>
    <option >Department2</option>
    <option>Department3</option>
</select>
</div>

<div className="mb-3">
<label for="exampleInputNational1" className="form-label" placeholder='Enter Your Nationalid'>National_id</label>

<input onChange={(e) => setnationalid(e.target.value)}  type="number" className="form-control" id="exampleInputNational1"/>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Users;