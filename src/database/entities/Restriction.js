import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";   

@Entity()
export class Restriction {
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
}
