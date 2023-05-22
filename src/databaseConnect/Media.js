 @Entity()
        class Media {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    url;

    @Column()
    type;
}

module.exports = Media;