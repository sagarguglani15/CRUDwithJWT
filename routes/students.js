var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
const fs = require('fs')

var path='Data/StudentsData.json'

router.get('/', (req, res)=>{
    var students = JSON.parse(fs.readFileSync(path));
    var curr_student
    students.forEach(student =>{
        if (student.username === req.user.username){
            curr_student = student
        }
    })
    res.send({
        "Students Details": curr_student
    })
})

router.delete('/', (req, res)=>{
    var students = JSON.parse(fs.readFileSync(path));
    var curr_student
    students.forEach(student =>{
        if (student.username === req.user.username){
            curr_student = student
        }
    })
    students.splice(students.indexOf(curr_student),1)
    fs.writeFileSync(path, JSON.stringify(students, null, 2))
    res.send('Student Deleted Successfully')
})

module.exports = router;
