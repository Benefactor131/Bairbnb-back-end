const customerModel = require('../models/CustomerModel.js');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

exports.registerNewCustomer =  (req, res) => {
    const customer = new customerModel(req.body);
    customer.password = bcrypt.hashSync(req.body.password, salt);
    
    customer.save()
    .then(newCustomer=>{
        res.status(201).json({
            message :"A new customer was created successfully and now stored in the database.",
            result : newCustomer
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message :err
        })
    })
}

exports.getCustomer =  (req, res) => {
    customerModel.findById(req.params.id)
    .then(customer=>{
        if(customer)
        {
            res.json({
                message : `customer with the id ${req.params.id}`,
                result : customer
            })
        }
        else
        {
            res.status(404).json({
                message : `There is no customer in the database with the id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `There is no customer in the database with the id ${req.params.id}`
            })
        }
        else
        {
            res.status(500).json({
                message :err
            })
        }
    })
}