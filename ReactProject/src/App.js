import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Departments from './Components/Departments/Departments'
import Users from './Components/Users/Users'
import Home from './Components/Home/Home'

function App() {
  return (
    <>
    <Navbar/>
    <Routes >
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/departments" element={<Departments/>} />
    <Route exact path="/users" element={<Users/>} />
   
   
    </Routes>
 
    </>

  )
}

export default App