const propertyModel = require('../models/PropertyModel.js');

exports.getAllProperties = async (req, res) => {
    const queryStringObj = {};

    if(req.query.propertyType)
    {
        queryStringObj.propertyType = req.query.propertyType
    }

    if(req.query.location)
    {
        queryStringObj.location = req.query.location
    }

    try
    {
        const properties = await propertyModel.find(queryStringObj)
     
        res.json({
            results : properties,
        })
        
    }
    catch(err)
    {
        res.status(500).json({
            message :err
        })
    }
}

exports.addNewProperty =  (req, res) => {
    const property = new propertyModel(req.body);
    property.save()
    .then(newProperty => {
        res.status(201).json({
            message :"A new property was added successfully and now stored in the database.",
            result : newProperty
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message :err
        })
    })
}

exports.getPropertiesTypes =  (req, res) => {
    propertyModel.find()
    .then(properties=>{
        if(properties){
            res.json({
                result: properties.map((property) => {
                    return property.propertyType;
                })
                .filter((record, index, type) => {
                    return type.indexOf(record) === index
                })
            })
        }
        else
        {
            res.status(404).json({
                message : `There are no properties in the database.`
            })
        }
    })
    .catch(err => {
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `There are no properties in the database.`
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

exports.getBestsellers =  (req, res) => {
    propertyModel.where({isBestseller: "true"})
    .then(property=>{       
        if(property)
        {
            res.json({
                result : property
            })
        }
        else
        {
            res.status(404).json({
                message : `There are no bestsellers in the database`
            })
        }
    })
    .catch(err=>{
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `There are no bestsellers in the database`
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

exports.getPropertyByType = (req, res) => {
    propertyModel.where({propertyType: `${req.params.type}`})
    .then(property=>{       
        if(property)
        {
            res.json({
                result : property
            })
        }
        else
        {
            res.status(404).json({
                message : `There are no bestsellers in the database`
            })
        }
    })
    .catch(err=>{
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `There are no bestsellers in the database`
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

exports.getPropertyById =  (req, res) => {
    propertyModel.findById(req.params.id)
    .then(property=>{       
        if(property)
        {
            res.json({
                message : `The property with the id ${req.params.id}`,
                result : property
            })
        }
        else
        {
            res.status(404).json({
                message : `There is no property in the database with the id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `There is no property in the database with the id ${req.params.id}`
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

exports.updatePropertyById =  (req, res) => {
    propertyModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(property=>{
        if(property)
        {
            res.json({
                message : `The property with the id ${req.params.id} was updated`,
                result : property
            })
        }
        else
        {
            res.status(404).json({
                message : `The property with the id ${req.params.id} was not found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}

exports.deletePropertyById =  (req, res) => {
    propertyModel.findByIdAndRemove(req.params.id)
    .then((property)=>{
        if(property)
        {
            res.json({
                message: `The property with the id ${req.params.id} was deleted`
            })
        }
        else
        {
            res.status(404).json({
                message : `The property with the id ${req.params.id} was not found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}