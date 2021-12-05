const {
    param, validationResult, body,
} = require('express-validator');

const createEmployee = [
    body('firstname').exists(),
    body('firstname').exists(),
    body('emailId').exists().isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]

const getEmployee = [
    param('id').exists(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]

const updateEmployee = [
    param('id').exists(),
    body('firstname').exists(),
    body('lastname').exists(),
    body('emailId').exists().isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]

const deleteEmployee = [
    param('id').exists(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]

module.exports = {
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
}