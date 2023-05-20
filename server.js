const express = require("express");
const app = express();
const StudentRouter = require("./routes/studentRouter");
require("dotenv").config();
const mongoose = require("mongoose");
app.use(express.json())

app.use("/api/student", StudentRouter);





  mongoose.connect(process.env.MONGO_URI).then(()=>
  {console.log("database Connected SucessFully")
    app.listen(process.env.PORT,()=>{
    console.log('server is listning on 5000')
})
})
