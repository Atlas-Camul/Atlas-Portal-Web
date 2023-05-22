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
module.exports = Beacon;