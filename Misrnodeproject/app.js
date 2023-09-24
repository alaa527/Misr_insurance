const express = require('express')
const connection = require('./configration/config')
const app = express()
const cors=require('cors')
app.use(cors())
const userRouter=require("./modules/users/routes/user.route")
require("dotenv").config();
app.use(express.json());

const port =process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'))

app.use(userRouter)

connection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))