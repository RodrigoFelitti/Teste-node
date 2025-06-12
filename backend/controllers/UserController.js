import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import User from "../models/User";
import logger from '../services/LoggerService'; // Assumindo que você tenha esse service

export default class UserController {

  async createUser(req, res) {
    try {
      const { email, password, name, admin } = req.body;

      if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string' || typeof admin !== 'boolean') {
        return res.status(400).json({ message: 'Invalid input data' });
      }

      const id = uuidv4();
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new User(id, name, email, passwordHash, admin);

      await newUser.save();

      logger.log(`Usuário criado com sucesso: ${email}`);
      res.status(201).json({ message: 'Usuário criado', user: newUser });

    } catch (error) {
      logger.log(`Erro ao criar usuário: ${error.message}`);
      res.status(500).json({ message: 'Erro ao criar usuário' });
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(user);
    } catch (error) {
      logger.log(`Erro ao buscar usuário: ${error.message}`);
      res.status(500).json({ message: 'Erro ao buscar usuário' });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password, admin } = req.body;

      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      user.name = name ?? user.name;
      user.email = email ?? user.email;
      user.admin = typeof admin === 'boolean' ? admin : user.admin;

      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      await user.save();

      logger.log(`Usuário atualizado: ${id}`);
      res.status(200).json({ message: 'Usuário atualizado', user });
    } catch (error) {
      logger.log(`Erro ao atualizar usuário: ${error.message}`);
      res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      user.deleted = true; 
      await user.save();

      logger.log(`Usuário deletado (soft): ${id}`);
      res.status(200).json({ message: 'Usuário deletado (soft)' });
    } catch (error) {
      logger.log(`Erro ao deletar usuário: ${error.message}`);
      res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
  }
}
