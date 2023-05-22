@Entity()
        class Restrictions {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    nameRestrictions;

    @Column()
    type;

    @Column()
    latitude;

    @Column()
    longitude;
}

module.exports = Restrictions;