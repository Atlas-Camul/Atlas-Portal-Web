import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('Beacon')
class Beacon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    zoneID: number;
}

export { Beacon };