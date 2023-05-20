const express = require("express");
const studentModel = require("../models/StudentModel")
const route = express.Router();
const { sendResponse } = require("../routes/helper/helper")

route.get("/", async (req, res) => {
  try {
    const result = await studentModel.find()
    if (!result) {
      res.send({
        status: false,
        data: null,
        message: "Data Not Found"
      })
        .status(404);
    } else res.send({
      status: true,
      data: null,
      message: ""
    })
      .status(200);
  } catch (e) {
    console.error(e);
    res.send({
      status: false,
      data: null,
      message: "interval server error"
    })
      .status(200);
  }

});
route.get("/:id", (req, res) => {
  res.send("Get Single Student Data");
});



route.post("/", async (req, res) => {

  let { firstName, LastName, Contact, Course } = req.body;
  try {
    let errArray = [];
    if (!firstName) {
      errArray.push("Required: firstName")
    }
    if (!LastName) {
      errArray.push("Required: lastName")
    }
    if (!Contact) {
      errArray.push("Required: contact")
    }
    if (!Course) {
      errArray.push("Required: course")
    }
    if (errArray.length > 0) {
      res.send(sendResponse(false, null, "Required All Feild")).status(400)
      return;
    } else {
      let obj = {firstName, LastName, Contact, Course}
      console.log(obj)
      let student = new studentModel(obj);
      console.log("student" ,student)

      await student.save();
      if (!student) {
        res.send(sendResponse(false, null, "Data Not Found"))
          .status(400)

      } else {
        res.send(sendResponse(true, student, "saved Successfully"))
          .status(200)
      }
    }
  } catch (err) {
    console.log(err)
    res.send(sendResponse(false, null, "internal server",)).status(404)
  }
});


route.put("/:id", (req, res) => {
  res.send("Edit Student Data");
});
route.delete("/:id", (req, res) => {
  res.send("Delete Student");
});

module.exports = route;
