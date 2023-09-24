import React from 'react'
import { useState} from 'react';
import axios from 'axios';

function Departments() {
    const [departname, setdepartname]=useState('')
     const [Users, setUser]=useState([])

    const getUser = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8001/getByDepartname', {
                departname:departname,
            }).then(res=>{
          
                console.log("cccc",res.data.Userdata)
                setUser(res.data.Userdata)
              
              })
         
            }
        catch (error) {
            if (error.response) {
              console.log(error)
              alert(JSON.stringify(error.response.data))
            }
        }
    }

    // console.log("mmmm",Users[0].name)
  return (
    <div>
    <div className='container text-white bg-dark w-70 h-70 mt-5'>
        <form className='py-4'>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">DepartmentName</label>
    <input onChange={(e) => setdepartname(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <button onClick={getUser} type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
<div>
      <div className='container mb-4'>
  
      <div className='row'>
        <table className='my-5 ' border={1}>
            <thead className='text-primary'>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Department_name</th>
            </thead>
            {Users.map((user) => (
            <tbody  key={user._id}>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.departname}</td>
                </tr>
            </tbody>  ))}
        </table>

       

      </div>
    </div>
</div>

    </div>
    
  )
}

export default Departments