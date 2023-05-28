import {User} from '../models/User';
import {UserRepository} from '../repositories/UserRepository';

interface IRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    constructor(private userRepository: UserRepository){}

    execute({ name, email, password }: IRequest):User {
        const user = this.userRepository.create({name, email, password});

        return user;
    }
}

export { CreateUserService };