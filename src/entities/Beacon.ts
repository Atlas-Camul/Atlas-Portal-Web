import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}

export { Beacon };