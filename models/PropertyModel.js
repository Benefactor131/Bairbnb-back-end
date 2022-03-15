const  mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
    propertyTitle: {
        type: String,
        required: true,
        unique: true
    },
    rentPrice: {
        type: Number,
        required: true
    },
    propertyDesc: {
        type: String,
        required: false
    },
    propertyType: {
        type: String,
        required: true
    },
    houseRules: {
        type: Array,
        required: false
    },
    amenities: {
        type: Array,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isBestseller: {
        type: Boolean,
        required: true
    },
    photoUrls: {
        type: Array,
        required: false
    }
});

const propertyModel = mongoose.model('properties', propertySchema);

module.exports = propertyModel;