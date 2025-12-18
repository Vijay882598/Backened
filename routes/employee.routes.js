const router = require('express').Router()
const Employee = require('../models/employee.model');

router.get('/', async (req, res) => {
    const data = await Employee.find();
    res.json(data)
});

router.post('/create', async (req, res)=> {
    const emp = new Employee(req.body);
    await emp.save();
    res.json(emp);
})

router.put('/:id', async (req,res)=> {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, {new :true});
    res.json(emp);
});

router.delete('/:id', async (req, res)=> {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({message:'Deleted'});
});

module.exports = router;