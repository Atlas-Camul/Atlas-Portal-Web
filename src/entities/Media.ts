import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Media')
class Media {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    type: string;
}

export { Media };