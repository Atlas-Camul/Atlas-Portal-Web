import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column()
    lastLogin: Date;
}

export { User };

