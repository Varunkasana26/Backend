//require('dotenv').config({path: '.env'});
import dotenv from "dotenv"
import connectDb from "./db/index.js";
dotenv.config({
    path: '.env'
});

connectDb();




















// import express from "express";
// const app = express();

// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error) =>{
//             console.log("ERRR: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server started on port ${process.env.PORT}`);
//         });
//     } catch(error){
//         console.error("Error connecting to the database", error);
//         throw err
//     }
// })()

// function connectToDatabase() {}

// connectToDatabase();
