
const { getAllUsers,addNewUser,UserByDepartname} = require('../controller/user.controller');

const router=require('express').Router();
router.get("/users",getAllUsers)
router.post("/addUser",addNewUser)
router.post("/getByDepartname",UserByDepartname)

module.exports=router;