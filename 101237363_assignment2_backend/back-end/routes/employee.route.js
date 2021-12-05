const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.model');
const EmployeeValidation = require('../validations/employee.validation');

router.post('/employee', EmployeeValidation.createEmployee, async function (req, res) {
    const { firstname, lastname, emailId } = req.body;
    try {
        const response = await Employee.create({ firstname, lastname, emailId });
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json({ 'Error': error })
    }
});


router.get('/employees', async function (req, res) {
    try {
        const response = await Employee.find();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ 'Error': error })
    }
});

router.get('/employee/:id', EmployeeValidation.getEmployee, async function (req, res) {
    const id = req.params.id;
    try {
        const response = await Employee.findOne({ _id: id });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ 'Error': error })
    }
});


router.put('/employee/:id', EmployeeValidation.updateEmployee, async function (req, res) {
    const id = req.params.id;
    const { firstname, lastname, emailId } = req.body;
    try {
        const response = await Employee.findOneAndUpdate({ _id: id }, { firstname, lastname, emailId }, { new: true });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ 'Error': error })
    }
});


router.delete('/employee/:id',EmployeeValidation.deleteEmployee,async function (req,res) {
    const id = req.params.id;
    try{
        const response = await Employee.findByIdAndDelete({_id:id});
        res.status(204).json(response);
    }
    catch(error){
        res.status(500).json({'Error':error})
    }
});

module.exports = router;