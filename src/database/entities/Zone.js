import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Zone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    restriction: number;
}