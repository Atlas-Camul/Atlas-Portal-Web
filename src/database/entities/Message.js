import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Message {
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
}
