// external import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
// internal import
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; 

// request parser
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// connect database
connectDB()

// view engin setup
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")))
 
// parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

// error handling 


app.listen(process.env.PORT, () => {
    console.log(`connection string is http://localhost:${PORT}`);
})