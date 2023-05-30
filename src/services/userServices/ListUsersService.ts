import {User} from '../../entities/User';
import {UserRepository} from '../../repositories/UserRepository';


class ListUsersService {
    async execute(): Promise<User[]> {
        const userRepository = new UserRepository();

        const users = await userRepository.listAll();

        return users;
    }
}

export { ListUsersService };