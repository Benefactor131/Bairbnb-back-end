const  mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumbers: {
        type: Array,
        required: false
    }
});

const customerModel = mongoose.model('customers', customerSchema);

module.exports = customerModel;