/*********************************************************************************
 * WEB422 – Assignment 2-4
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Bair Suimaliev Student ID: 159350198 Date: 2022/03/14
 *
 * Online (Heroku) URL: 
 *
 ********************************************************************************/
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/keys.env" });
}

const customerController = require("./controllers/CustomerController.js");
const propertyController = require("./controllers/PropertyController.js");

const app = express();

var allowList = ['http://localhost:3001', 'https://bairbnb.netlify.app']
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));
app.use(express.json());

app.use("/customer", customerController);
app.use("/property", propertyController);

app.get("*", function (req, res) {
  res.status(404).send("Page Not Found");
});

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`Web Server is up an running on PORT : ${PORT}`);

  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION);
    console.log(`You are now connected to MongoDB`);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
});
