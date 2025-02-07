
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
      name: "Marwa",
      age: 24
    }
    const createCustomer = await customer.create(newCustomer)
    console.log("Create new customer: ", createCustomer)
  }

//   2. View all customers
async function getAllCustomer() {

    const allCustomer = await customer.find();
    console.log("All Customer " + allCustomer)
  }


//   3. Update a customer
async function updateCustomer() {
    //const updateCustomer = await customer.findByIdAndUpdate('6783ddc8915539ea4992032f',{name:'Salman'},{age:25})
    const updateCustomer = await customer.updateOne({age:50},{age: 22})
    console.log(" Updated Customer : "+ updateCustomer)
  }


//   4. Delete a customer

async function deleteOneCustomer() {
    //const deleteCustomer = await customer.deleteOne({name:''})
    const deleteCustomer = await customer.findByIdAndDelete("67a68552c24279241ac11a38")
    console.log("Delete Customer: "+ deleteCustomer)
  }
//   5. quit

const runQueries = async () => {
  console.log('Queries running.')
  //await createCustomer()
  await getAllCustomer();
  await updateCustomer();
  await deleteOneCustomer();

};
connect()
