"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersService = void 0;
class ListUsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute() {
        const user = this.userRepository.all();
        return user;
    }
}
exports.ListUsersService = ListUsersService;
