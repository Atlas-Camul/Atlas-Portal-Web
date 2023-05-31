import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";   

@Entity('Restriction')
class Restriction {
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
    zoneID: number;
}

export { Restriction };
