///tasks/new

export default class TaskController {
    async createTask(req, res) {
        try {
            

            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error creating task' });
        }
    }
}