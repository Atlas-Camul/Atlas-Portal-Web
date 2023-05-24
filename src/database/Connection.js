import { createConnection } from 'typeorm';
import { Beacon } from './entities/Beacon';
import { User } from './entities/User';
import { Message } from './entities/Message';
import { Media } from './entities/Media';
import { Zone } from './entities/Zone';
import { Restriction } from './entities/Restriction';
import { Route } from './entities/Route';

export async function startConnection() {
    return await createConnection({
        type: 'mysql',
        host: 'atlas-isep.mysql.database.azure.com',
        port: 3306,
        username: 'AtlasAdmin',
        password: 'C9wFvW19$GSH92i#',
        database: 'atlasdb',
        synchronize: true,
        logging: true,
        entities: [User, Beacon, Message, Media, Zone, Restrictions, Route],
    });
}