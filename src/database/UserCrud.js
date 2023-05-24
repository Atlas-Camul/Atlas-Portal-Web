
const { getRepository } = require('typeorm');
const { User } = require('./Connection');

async function insertUser(name, email, phone, password) {
        const user = new User();
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.password = password;

        const userRepository = getRepository(User);
        await userRepository.save(user);

        console.log('Novo usuário inserido:', user);
    }

    async  function updateUser(id, name, email, phone, password) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne(id);

        if (!user) {
            console.log('Usuário não encontrado');
            return;
        }

        user.name = name;
        user.email = email;
        user.phone = phone;
        user.password = password;

        await userRepository.save(user);

        console.log('Usuário atualizado:', user);
    }

async function deleteUser(id) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne(id);

        if (!user) {
            console.log('Usuário não encontrado');
            return;
        }

        await userRepository.remove(user);

        console.log('Usuário removido:', user);
    }

        module.exports = { insertUser, updateUser, deleteUser };

     