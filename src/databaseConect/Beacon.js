@Entity()
        class Beacon {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    name;

    @Column()
    latitude;

    @Column()
    longitude;
}