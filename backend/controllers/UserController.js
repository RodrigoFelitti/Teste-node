import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

import User from "../models/User";

export default class UserController {
    
    async createUser(req, res) {
        try {
            const {email, password, name, admin} = req.body;

            if(typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string' || typeof admin !== 'boolean') {
                return res.status(400).json({ message: 'Invalid input data' });
            }

            
            
            
            const id = uuidv4();
            const passworHash = bcrypt.hash(password, 10);
            
            const newUser = new User(id, name, email, passworHash, admin)
            
            newUser.
            
            res.status(201).json(newUser);
            logger.log('Usuário Criado com sucesso');
        } catch (error) {
            res.status(500).json({ message: 'Error creating user' });
            logger.log('Erro ao criar usuário');
        }
    }

    async getUser(res){
        try {
            
        } catch (error) {
            
        }
    }
}