const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const employee = require('./routes/employee.route');

mongoose.connect('mongodb://localhost:27017/101237363_assignment2').then((success)=>{
    console.log('Successfully connected to database');
}).catch((error)=>{
    console.log(error);
    process.exit(1);
});

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/v1', employee);

app.listen(3000,()=>{console.log('Server Listening on port 3000');})

module.exports=app;
