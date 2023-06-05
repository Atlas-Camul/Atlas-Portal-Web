import {Repository, getRepository, Like, ILike} from 'typeorm';
import { User } from '../entities/User';

interface IUser {
    name: string,
    email: string,
    password: string,
    lastLogin: Date
}

interface IFind {
    name: string,
    email: string
}
class UserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async create({ name, email, password, lastLogin }: IUser): Promise<User>{
        const user = this.repository.create({ name, email, password, lastLogin });

        await this.repository.save(user);

        return user;
    }

    async delete(user: User): Promise<User> {
        const userExit = await this.repository.remove(user);

        return userExit;
    }



    async findByEmail(email: string): Promise<User | null>{

        const user = await this.repository.findOne({
            where: [{ email }]
            });

        return user;
    }

    async findByEmailOrName({ name, email }: IFind): Promise<User[]> {
        const users = await this.repository.find({
            where: [
                { name: Like(name) },
                { email: Like(email) }
            ]
        });

        return users;
    }


    async listAll(): Promise<User[]>{
        const user = await this.repository.find();

        return user;
    }

    async update(user: User): Promise<User>{
        const userExit = await this.repository.save(user);

        return userExit;
    }
}

export {UserRepository};
