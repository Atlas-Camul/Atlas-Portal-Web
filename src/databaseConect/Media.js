 @Entity()
        class Media {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    url;

    @Column()
    type;
}