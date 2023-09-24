const User=require("../model/user.model")
const { StatusCodes } = require("http-status-codes");
const getAllUsers=async (req,res) =>{
  try{  const users=await User.find({isDeleted: false})
  res.json({message:"All Users",data: users})}
      catch(error){
        res.json({message:"Error",error}); 
     }
  };
  const addNewUser=async(req,res)=>{
    let {name,age,email,password,departname,nationalid}=req.body;
    try{
        await User.insertMany({name,age,email,password,departname,nationalid})
        res.json({message:"Added success"})
    }
    catch(error){
        res.json({message:"Error",error}) 
    }
    }

    const UserByDepartname=async(req,res)=>{
        let {departname}=req.body;
      
        try{
        const Userdata= await User.find({departname:departname})
        res.json({message:"get Users Successfully" , Userdata})
        }
        catch(error){
            res.json({message:"Error",error}) 
        }
    }
  module.exports={getAllUsers,addNewUser,UserByDepartname}