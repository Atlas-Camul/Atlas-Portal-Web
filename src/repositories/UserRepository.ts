import {Repository, getRepository} from 'typeorm';

import { User } from '../entities/User';

interface IUser {
    name: string,
    email: string,
    password: string
}

class UserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async create({name, email, password} : IUser): Promise<User>{
        const user = this.repository.create({name, email, password});

        await this.repository.save(user);

        return user;
    }

    async findByEmail({ email }:IUser): Promise<User | undefined>{
        const user = await this.repository.findOne({
            where: [{ email }]
            });

        return user;
    }

   
}

export {UserRepository};
