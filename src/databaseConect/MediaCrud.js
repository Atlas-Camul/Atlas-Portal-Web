
const { getRepository } = require('typeorm');
const { Media } = require('./Connection');


async function insertMedia(url, type) {
        const media = new Media();
        media.url = url;
        media.type = type;


        const mediaRepository = getRepository(Media);
        await mediaRepository.save(media);

        console.log('Nova m�dia inserida:', media);
    }


async function updateMedia(id, url, type) {
        const mediaRepository = getRepository(Media);
        const media = await mediaRepository.findOne(id);

        if (!media) {
            console.log('M�dia n�o encontrada');
            return;
        }

        media.url = url;
        media.type = type;


        await mediaRepository.save(media);

        console.log('M�dia atualizada:', media);
    }

    async function deleteMedia(id) {
        const mediaRepository = getRepository(Media);
        const media = await mediaRepository.findOne(id);

        if (!media) {
            console.log('M�dia n�o encontrada');
            return;
        }

        await mediaRepository.remove(media);

        console.log('M�dia removida:', media);
    }

         module.exports = { insertMedia, updateMedia, deleteMedia };