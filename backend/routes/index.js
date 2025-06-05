import express from 'express';


const router = express.Router();


router.use('/users', require('./user.routes'));

router.use('/tasks/new', require('./task.router'));




export default router