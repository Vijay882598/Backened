const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    role:{type:String},
    status:{type:String},
    salary:Number,
    phone:String,
})

module.exports = mongoose.model('Employee', EmployeeSchema);