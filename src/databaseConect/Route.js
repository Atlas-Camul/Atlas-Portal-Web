@Entity()
        class Route {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    name;

    @Column()
    path;
}