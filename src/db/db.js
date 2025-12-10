import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB conneted !! DB HOST: ${connectionInstance.connection.host}`);



  } catch (error) {
    console.log("MONGODB connection error ", error)
    // we use process for being able to refer to the current process that is being executed .

    // this exit code 1 has a unqiue functioning value
    process.exit(1) 
  }
}

export default connectDB