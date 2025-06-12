const bcrypt = require("bcrypt");

const users = [];

export default class User {
  constructor(id, name, email, passwordHash, admin) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.admin = admin;
    this.deleted = false;
  }

  async isPasswordValid(passwordInput) {
    if (!passwordInput) {
      console.log("No password input");
      return false;
    }

    return await bcrypt.compare(passwordInput, this.passwordHash);
  }

  async save() {
    const existingIndex = users.findIndex((u) => u.id === this.id);
    if (existingIndex !== -1) {
      users[existingIndex] = this; 
    } else {
      users.push(this); 
    }
  }

  static async findById(id) {
    return users.find((u) => u.id === id && !u.deleted) || null;
  }

  static async findAll() {
    return users.filter((u) => !u.deleted);
  }

  static async deleteById(id) {
    const user = users.find((u) => u.id === id);
    if (user) {
      user.deleted = true;
    }
  }

  static async clearAll() {
    users.length = 0; // para testes
  }
}
