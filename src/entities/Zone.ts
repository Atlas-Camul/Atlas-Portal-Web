import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Zone')
class Zone {
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

export { Zone };