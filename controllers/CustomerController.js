const express = require('express')
const router = express.Router();

const customerService = require("../services/CustomerService.js");

const { createCustomerValidation } = require("../middleware/validation.js")
const { getCustomerValidation } = require("../middleware/validation.js")

router.post("/register", createCustomerValidation, customerService.registerNewCustomer)
router.get("/:id", getCustomerValidation, customerService.getCustomer)

module.exports = router;
