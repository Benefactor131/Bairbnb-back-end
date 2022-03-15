exports.createCustomerValidation = (req, res, next) => {
    const errors = [];

    if(!req.body.firstName ||  req.body.firstName === "")
        errors.push( {field : "firstName", message :"You must provide the first name."})

    if(!req.body.lastName  || req.body.lastName === "" )
        errors.push( {field : "lastName", message :"You must provide the last name."})

    if(!req.body.email  || req.body.email === "" )
        errors.push( {field : "email", message :"You must provide the email."})
        
    if(!req.body.password  || req.body.password === "" )
        errors.push( {field : "password", message :"You must provide the password."})
        
    if(errors.length > 0)
    {
        res.status(400).json({
            message : "The customer was not created.",
            data : errors  
        })
    }
    else
    {
        next();
    }
}

exports.getCustomerValidation = (req, res, next) => {
    const errors = [];

    if(!req.body._id ||  req.body._id === "")
        errors.push( {field : "_id", message :"You must provide the id."})
        
    if(errors.length > 0)
    {
        res.status(400).json({
            message : "The customer was not found.",
            data : errors  
        })
    }
    else
    {
        next();
    }
}

exports.createPropertyValidation = (req, res, next) => {
    const errors = [];

    if(!req.body.propertyTitle ||  req.body.propertyTitle === "")
        errors.push( {field : "propertyTitle", message :"You must provide the property title."})

    if(!req.body.rentPrice  || req.body.rentPrice === 0 )
        errors.push( {field : "rentPrice", message :"You must provide the rent price."})

    if(!req.body.propertyType  || req.body.propertyType === "" )
        errors.push( {field : "propertyType", message :"You must provide the property type."})
        
    if(!req.body.amenities  || req.body.amenities === "" )
        errors.push( {field : "amenities", message :"You must provide the amenities."})

    if(!req.body.location  || req.body.location === "" )
        errors.push( {field : "location", message :"You must provide the location."})
    
        
    if(errors.length > 0)
    {
        res.status(400).json({
            message : "The property was not created.",
            data : errors  
        })
    }
    else
    {
        next();
    }
}

// exports.getPropertyValidation = (req, res, next) => {
//     const errors = [];

//     if(!req.body._id ||  req.body._id === "")
//         errors.push( {field : "_id", message :"You must provide the id."})
        
//     if(errors.length > 0)
//     {
//         res.status(400).json({
//             message : "Could not fetch the property.",
//             data : errors  
//         })
//     }
//     else
//     {
//         next();
//     }
// }

exports.updatePropertyValidation = (req, res, next) => {
    const errors = [];

    if(!req.body._id ||  req.body._id === "")
        errors.push( {field : "_id", message :"You must provide the id."})

    if(!req.body.propertyTitle ||  req.body.propertyTitle === "")
        errors.push( {field : "propertyTitle", message :"You must provide the property title."})

    if(!req.body.rentPrice  || req.body.rentPrice === 0 )
        errors.push( {field : "rentPrice", message :"You must provide the rent price."})

    if(!req.body.propertyType  || req.body.propertyType === "" )
        errors.push( {field : "propertyType", message :"You must provide the property type."})
        
    if(!req.body.amenities  || req.body.amenities === "" )
        errors.push( {field : "amenities", message :"You must provide the amenities."})

    if(!req.body.location  || req.body.location === "" )
        errors.push( {field : "location", message :"You must provide the location."})
    
    if(req.body.isBestseller === "" )
        errors.push( {field : "isBestseller", message :"You must indicate whether the property is a bestseller."})

        
    if(errors.length > 0)
    {
        res.status(400).json({
            message : "The property was not updated.",
            data : errors  
        })
    }
    else
    {
        next();
    }
}

exports.deletePropertyValidation = (req, res, next) => {
    const errors = [];

    if(!req.body._id ||  req.body._id === "")
        errors.push( {field : "_id", message :"You must provide the id."})
        
    if(errors.length > 0)
    {
        res.status(400).json({
            message : "The property was not deleted.",
            data : errors  
        })
    }
    else
    {
        next();
    }
}