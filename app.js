
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const customer = require('./model');


const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

/* /////////////
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
 */

//  1. Create a customer
async function createCustomer() {
    const newCustomer = {
      name: "Mohamed",
      age: 12
    }
    const createCustomer = await customer.create(newCustomer)
    console.log("Create new customer: ", newCustomer)
  }

//   2. View all customers
async function getAllCustomer() {

    const allCustomer = await customer.find();
    console.log("All Customer " + allCustomer)
  }


//   3. Update a customer
async function updateCustomer() {
    const updateCustomer = await Todo.findByIdAndUpdate('',{name:'/*  */ '},{age:/*  */})
    console.log(" Updated Customer : "+ updateCustomer)
  }


//   4. Delete a customer

async function deleteOneCustomer() {
    const deleteCustomer = await Todo.deleteOne({name:''})
    console.log("Delete Customer: "+ deleteCustomer)
  }
//   5. quit
