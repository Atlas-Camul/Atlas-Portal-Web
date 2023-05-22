
const { getRepository } = require('typeorm');
const { Media } = require('./Connection');


async function insertMedia(url, type) {
        const media = new Media();
        media.url = url;
        media.type = type;


        const mediaRepository = getRepository(Media);
        await mediaRepository.save(media);

        console.log('Nova mídia inserida:', media);
    }


async function updateMedia(id, url, type) {
        const mediaRepository = getRepository(Media);
        const media = await mediaRepository.findOne(id);

        if (!media) {
            console.log('Mídia não encontrada');
            return;
        }

        media.url = url;
        media.type = type;


        await mediaRepository.save(media);

        console.log('Mídia atualizada:', media);
    }

    async function deleteMedia(id) {
        const mediaRepository = getRepository(Media);
        const media = await mediaRepository.findOne(id);

        if (!media) {
            console.log('Mídia não encontrada');
            return;
        }

        await mediaRepository.remove(media);

        console.log('Mídia removida:', media);
    }

         module.exports = { insertMedia, updateMedia, deleteMedia };