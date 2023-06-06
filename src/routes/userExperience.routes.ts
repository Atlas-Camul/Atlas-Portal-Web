import { Router } from 'express';
import { ListMessageService } from '../services/messageServices/ListMessagesService';
import { DeleteMessageService } from '../services/messageServices/DeleteMessageService';
import { ListMediasService } from '../services/mediaServices/ListMediasService';
import { AppError } from '../errors/AppError';


const userExperienceRoutes = Router();

userExperienceRoutes.get('/list', async (req, res) => {

    const referer = req.headers.referer;

    if (!referer) {
        throw new AppError("Page not found", 404);
    }


    const listMessageService = new ListMessageService();

    const messages = await listMessageService.execute();

    return res.json(messages);
});

userExperienceRoutes.get('/media', async (req, res) => {


     const queryParams = req.query;

    

     var id = queryParams.id;

         if (typeof id !== 'string') {
         id = '0';

    }
    var messageID = Number(id);
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