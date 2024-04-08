const { Schema, models, model } = require('mongoose');



// user Schema
const UserSchema = new Schema({
    userId: String,
    fristName: String,
    lastName: String,
    email: String,
    country: String,
    password: String,
    createdAt: { type: Date, default: Date.now() }
});






// task Schema
const TaskSchema = new Schema({
    userId: String,
    title: String,
    priority: String,
    stage: String,
    dis: String,
    createdAt: { type: Date, default: Date.now() }
});





//user model
const User = models.User || model("User", UserSchema);

//task model
const Task = models.Task || model("Task", TaskSchema);


//export the module
module.exports = {
    User,
    Task
};