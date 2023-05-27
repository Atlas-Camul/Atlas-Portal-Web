interface IRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    execute({ name, email, password }: IRequest):void {}
}

export { CreateUserService };