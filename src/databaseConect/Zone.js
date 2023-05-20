 @Entity()
        class Zone {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    name;

    @Column()
    type;

    @Column()
    latitude;

    @Column()
    longitude;

    @Column()
    restriction;
}