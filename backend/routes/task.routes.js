import express from 'express'
import { createTask, getTask, deleteTask, updateTask } from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', createTask);

router.get('/:id', getTask);

//router.get('/:id?assignedTo={userId}', getTask);

router.delete('/:id', deleteTask);

router.put('/:id', updateTask);

export default router