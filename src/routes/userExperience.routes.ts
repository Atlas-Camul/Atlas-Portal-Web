import { Router } from 'express';
import { ListMessageService } from '../services/messageServices/ListMessagesService';
import { DeleteMessageService } from '../services/messageServices/DeleteMessageService';
import { ListMediasService } from '../services/mediaServices/ListMediasService';

const userExperienceRoutes = Router();

userExperienceRoutes.get('/list', async (req, res) => {
    const listMessageService = new ListMessageService();

    const messages = await listMessageService.execute();

    return res.json(messages);
});

userExperienceRoutes.get('/media', async (req, res) => {
    const { messageID } = req.body;

    const listMediaService = new ListMediasService();

    const medias = await listMediaService.execute(messageID);

    return res.json(medias);
});

userExperienceRoutes.delete('/', async (req, res) => {
    const { messageID } = req.body;

    const deleteMessageService = new DeleteMessageService();

    const message = await deleteMessageService.execute(messageID);

    return res.json(message);
})

export { userExperienceRoutes };