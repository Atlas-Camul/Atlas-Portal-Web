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

<<<<<<< HEAD
    async findByEmail({ email }: IUser): Promise<User | undefined>{
=======
    async findByEmail(email: string): Promise<User | null>{
>>>>>>> 488d589ee937226770038a0c639814dfec368bf6
        const user = await this.repository.findOne({
            where: [{ email }]
            });

        return user;
    }

<<<<<<< HEAD
   
=======
    async listAll(): Promise<User[]>{
        const user = await this.repository.find();

        return user;
    }

    async update(user: User): Promise<User>{
        const userExit = await this.repository.save(user);

        return userExit;
    }
>>>>>>> 488d589ee937226770038a0c639814dfec368bf6
}

export {UserRepository};
