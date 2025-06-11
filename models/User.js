const bcrypt = require("bcrypt");

export default class User {
    constructor(id, name, email, passwordHash, admin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.admin = admin;
    }

    async isPasswordValid(passwordInput) {
        if(!passwordInput) {
            console.log("No password input");
            return false;
        }

        return await bcrypt.compare(passwordInput, this.passwordHash);

    }

    


}