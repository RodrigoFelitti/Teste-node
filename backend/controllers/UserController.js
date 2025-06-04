export default class UserController {
    async createUser(req, res) {
        try {


            

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user' });
        }
    }
}