import express from 'express';
import UserController from '../controllers/userController';

const userController = new UserController()


const router = express.Router();


router.post('/tasks/new', CreateTaskController.createUser);
router.get('/:id', userController.getUser);
router.get('/:assignment', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);






export default router