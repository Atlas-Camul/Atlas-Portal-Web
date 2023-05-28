"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../models/User");
class UserRepository {
    constructor() {
        this.users = [];
    }
    all() {
        return this.users;
    }
    create({ name, email, password }) {
        const user = new User_1.User(0, name, email, "", password);
        this.users.push(user);
        return user;
    }
    findByEmail(email) {
        const user = this.users.find(item => item.email == email);
        return user;
    }
}
exports.UserRepository = UserRepository;
