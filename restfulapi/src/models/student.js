const mongoose = require("mongoose");
var validator = require('validator');

// post put 201 

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        require: true,
        min: 10,
        unique: true
    },
    address: {
        type: String,
        require: true,
    }
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;











