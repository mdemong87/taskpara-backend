const { Task } = require('../../model/schemaANDmodel');


//get task
const getTask = async (req, res) => {

    // const userId = req.userId;
    // const email = req.email;

    try {


        const task = await Task.find({});

        res.status(200).json({
            success: true,
            data: task,
            message: 'Get Task Successfull',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Getting Task Failed',
        });
    }

}


//get single task
const getSingleTask = async (req, res) => {

    const { id } = req.params;


    try {


        const task = await Task.findOne({ _id: id });

        res.status(200).json({
            success: true,
            data: task,
            message: 'Get Single Task Successfull',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Getting Single Task Failed',
        });
    }

}





//post task
const postTask = async (req, res) => {

    const userId = req.userId;
    const { title, priority, stage, dis } = req.body;

    try {
        const taskData = {
            userId,
            title,
            priority,
            stage,
            dis
        }


        //save the task in the database
        const created = await Task.create(taskData);


        //response back in frontend
        res.status(200).json({
            success: true,
            data: created,
            message: 'Task Created Successfull',
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Task Created Failed',
        });
    }
}







// //update task
// const updateTask = async (req, res) => {


//     const { id } = req.params;


//     console.log(id);

//     try {


//         const task = await Task.findOne({ _id: id });

//         res.status(200).json({
//             success: true,
//             data: task,
//             message: 'Update Task Successfull',
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Update Task Failed',
//         });
//     }
// }




// //delete task
// const deleteTask = async (req, res) => {

//     const { id } = req.params;


//     console.log(id);

//     try {


//         const task = await Task.findOne({ _id: id });

//         res.status(200).json({
//             success: true,
//             data: task,
//             message: 'Update Task Successfull',
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Update Task Failed',
//         });
//     }
// }






module.exports = {
    getTask,
    postTask,
    // updateTask,
    // deleteTask,
    getSingleTask
};