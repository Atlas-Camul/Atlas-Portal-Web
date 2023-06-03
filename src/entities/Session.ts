import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'; 

@Entity('Session')
class Session{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column()
    expiryDate: Date;

    @Column()
    userID: number;
}

export { Session };