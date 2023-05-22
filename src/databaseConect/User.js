   @entity()
        class User {
        @primarygeneratedcolumn()
        id;

        @column()
        name;

        @column()
        email;

        @column()
        phone;

        @column()
        password;

}

module.exports = User;

