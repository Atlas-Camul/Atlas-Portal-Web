import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";  

@Entity('Route')
class Route {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    path: string;
}

export { Route };
