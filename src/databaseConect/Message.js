@Entity()
        class Message {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    title;

    @Column()
    description;

    @Column()
    latitude;

    @Column()
    longitude;
}