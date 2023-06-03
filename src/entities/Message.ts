import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Message')
class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    userID: number;
}

export { Message };
