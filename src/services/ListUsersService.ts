import {User} from '../models/User';
import {UserRepository} from '../repositories/UserRepository';


class ListUsersService {
    constructor(private userRepository: UserRepository){}

    execute():User {
        const user = this.userRepository.all();

        return user;
    }
}

export { ListUsersService };