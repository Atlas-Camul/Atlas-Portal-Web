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
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    zoneID: number;

    @Column()
    userID: number;
}

export { Message };
