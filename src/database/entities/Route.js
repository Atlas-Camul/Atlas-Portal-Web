import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";  

@Entity()
export class Route {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    path: string;
}
