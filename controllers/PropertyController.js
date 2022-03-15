const express = require('express')
const router = express.Router();

const propertyService = require("../services/PropertyService.js");

const { createPropertyValidation } = require("../middleware/validation.js");
const { updatePropertyValidation } = require("../middleware/validation.js");
const { deletePropertyValidation } = require("../middleware/validation.js");

router.get("/", propertyService.getAllProperties)
router.post("/add", createPropertyValidation, propertyService.addNewProperty)
router.get("/types", propertyService.getPropertiesTypes)
router.get("/bestsellers", propertyService.getBestsellers)
router.get("/types/:type", propertyService.getPropertyByType)
router.get("/:id", propertyService.getPropertyById)
router.post("/update/:id", updatePropertyValidation, propertyService.updatePropertyById)
router.delete("/delete/:id", deletePropertyValidation, propertyService.deletePropertyById)

module.exports = router;