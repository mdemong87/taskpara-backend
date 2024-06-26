const express = require('express');
const router = express.Router();
const { getTask, postTask, updateTask, deleteTask, getSingleTask } = require("../../controller/task/taskController");
const checkLogin = require("../../../middleware/checkLogin");




//app routes GET request
router.get('/app/task', checkLogin, getTask);



//app route POST request
router.post('/app/task', postTask);



//get single task route
router.get('/app/task/:id', getSingleTask);


//app route PUT request
router.put('/app/task:id', updateTask);


//app route DELETE request
router.delete('/app/task:id', deleteTask);




module.exports = router;
