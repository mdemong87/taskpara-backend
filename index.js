const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require('dotenv');
const taskRoute = require("./app/routes/task/taskRoute");
const authentication = require("./app/routes/auth/index");



const app = express();
dotenv.config();
const PORT = 3001;

// Middleware to parse JSON bodies and Middleware to parse URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.NEXT_PUBLIC_FRONTEND_URL, // Specify the allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials (cookies)
}));


//app route initialization
app.use("/", taskRoute);

//auth route initilization
app.use("/auth", authentication);



app.get("/", (req, res) => res.send("Express on Vercel"));


//default error handling function
const errorhandleing = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        error: err
    })
}
app.use(errorhandleing);





//connection the database
async function ConnectDB() {

    // connect database
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, (err) => {
        if (!err) {
            console.log("db is connected");

            //application listen on port 3000
            app.listen(PORT, (err) => {
                if (err) {
                    console.log("Got an error while listening the server")
                } else {
                    console.log(`Server ready on port ${PORT}`)
                }
            });
        } else {
            console.log('db is not connected');
        }
    });
}

//call the database connention function
ConnectDB();



//export file
module.exports = app;