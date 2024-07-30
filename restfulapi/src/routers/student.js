const express = require('express');
const router = new express.Router();
const Student = require("../models/student");

// router.post("/students", (req, res) => {
//     console.log(req.body)
//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// });

router.post("/students", async (req, res) => {
    console.log(req.body)
    try {
        const user = new Student(req.body);
        const createUser = await user.save()
        res.status(201).send(createUser);

    } catch (error) {
        res.status(400).send(error);
    }
});


// get all student 
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (error) {
        res.send(error);
    }
});
// get all student 

// get single student by id student 
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findById(_id);
        console.log(studentData)
        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }

    } catch (error) {
        res.status(500).send(error);
    }
});
// get single student by id student 

// update the students by id
router.patch("/students/:id", async (req, res) => {
    try {
        const id = req.params.id
        const updateStudents = await Student.findByIdAndUpdate(id, req.body, { new: true })
        res.send(updateStudents)
    } catch (error) {
        res.status(404).send(error)

    }
})


// update the students by id

//  delete students by id
router.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deleteStudent = await Student.findByIdAndDelete(id)
        if (!req.params.id) {
            return res.status(404).send();
        } else {
            res.send(deleteStudent)
        }
    } catch (error) {
        res.status(500).send(error)

    }
})

// delete students by id

module.exports = router