class User {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;

    constructor(id: number, name: string, email: string, phone: string, password: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}

export { User };

