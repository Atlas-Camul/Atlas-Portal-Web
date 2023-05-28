import { User } from '../models/User';

interface IUser {
    name: string,
    email: string,
    password: string
}

class UserRepository {
    private users: User[];

    constructor(){
        this.users = [];
    }

    all(): User[]{
        return this.users;
    }

    create({name, email, password} : IUser): User{
        const user = new User(0, name, email, "", password);

        this.users.push(user);

        return user;
    }
}

export {UserRepository};
