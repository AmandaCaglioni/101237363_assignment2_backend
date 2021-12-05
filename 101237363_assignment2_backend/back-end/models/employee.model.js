const mongoose = require('mongoose');
const validator = require('validator');

const employeeSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    emailId: {
        type: String,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        },
    }

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;