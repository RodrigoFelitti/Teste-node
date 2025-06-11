import express from 'express';

const router = express.Router();

router.use('/users', require('./user.routes'));
router.use('/tasks', require('./task.routes'));

export default router