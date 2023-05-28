

const { getRepository } = require('typeorm');
const { Message } = require('./Connection');


async function insertMessage(title, description, latitude, longitude) {
        const message = new Message();
        message.title = title;
        message.description = description;
        message.latitude = latitude;
        message.longitude = longitude;

        const messageRepository = getRepository(Message);
        await messageRepository.save(message);

        console.log('Nova mensagem inserida:', message);
    }

async function updateMessage(id, title, description, latitude, longitude) {
        const messageRepository = getRepository(Message);
        const message = await messageRepository.findOne(id);

        if (!message) {
            console.log('Mensagem não encontrada');
            return;
        }

        message.title = title;
        message.description = description;
        message.latitude = latitude;
        message.longitude = longitude;

        await messageRepository.save(message);

        console.log('Mensagem atualizada:', message);
    }

async function deleteMessage(id) {
        const messageRepository = getRepository(Message);
        const message = await messageRepository.findOne(id);

        if (!message) {
            console.log('MMensagem não encontrada');
            return;
        }

        await messageRepository.remove(message);

        console.log('Mensagem removida:', message);
    }
     module.exports = { insertMessage, updateMessage, deleteMessage };