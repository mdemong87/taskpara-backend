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

const corsConfig = {
    origin: process.env.NEXT_PUBLIC_FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))


//app route initialization
app.use("/", taskRoute);



//"bcrypt": "^5.1.1",
// //auth route initilization
// app.use("/auth", authentication);



app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Task Management Software Server in Runnign"
    })
});


//default error handling function
const errorhandleing = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        error: err
    })
}
app.use(errorhandleing);




// connect database
mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, (err) => {
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



//export file
module.exports = app;