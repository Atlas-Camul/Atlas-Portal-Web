import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';


class UpdateSessionService {
    async execute(user: User): Promise<User> {
        const userRepository = new UserRepository();

        user.lastLogin = new Date();

        const userUpdate = await userRepository.update(user);

        return userUpdate;
    }
}

export { UpdateSessionService };