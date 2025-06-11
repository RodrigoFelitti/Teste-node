import { v4 as uuid } from 'uuid';

let tasks = [];

export const createTask = (req, res) => {   
    //request vem com json no body
    const task = req.body;

    //coloca na lista tasks
    tasks.push({...task, id: uuid()});
    
    res.send('done');
    
    console.log(`Task [${tasks.title}] added to the database.`);
};

export const getTask = (req, res) => {
    res.send(req.params.id)
};

export const deleteTask = (req, res) => { 
    console.log(`Task with id ${req.params.id} has been deleted`);
    
    tasks = tasks.filter((task) => task.id !== req.params.id);

    res.send('done');
};

export const updateTask =  (req,res) => {
    const task = tasks.find((task) => task.id === req.params.id);
    
    task.title = req.body.title;
    task.status = req.body.status;
    task.assignee = req.body.assignee

    res.send('done');

    console.log(`Task has been updated to ${req.body.title}.Status has been updated to ${req.body.status}`)
};