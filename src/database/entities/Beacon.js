import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
    export class Beacon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;
}