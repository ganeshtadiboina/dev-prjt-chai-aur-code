// require('dotenv').config({path: './env'}) -> this kind of declaration which messup with the execution of the appliaction 

import dotenv from "dotenv"



// even it is imported for it to get started with the working we have to configure it .

dotenv.config()


import connectDB from "./db/db.js";


connectDB()















/* This is the first approach we talked about where the entire functionality of the code has been written in the server.js file itself 

import express from "express"
const app = express()


// this one of the way in writting the code and calling the function 
// function connectDB(){}

// connectDB()

// the other one round the way is using an efiy function which executes instantly . use a semi colon in the start which might help with the previously running process to stop and let this process to begin with its execution 

// by adding async we made it a async await function .

;(async () => {
  try {

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    // We are creating a listener known as on to be able to know whether our express is being able to talk or not .

    app.on("errror", (error) => {
      console.log("ERROR:", error)
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listen on port ${process.env.PORT}`);
    })

  } catch (error) {

    console.error("ERROR: ", error)
    throw error

  }
})() 
*/