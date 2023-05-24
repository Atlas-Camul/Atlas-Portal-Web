import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    type: string;
}