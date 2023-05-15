
const { createConnection, getConnection, Connection, Entity, PrimaryGeneratedColumn, Column, getRepository } = require('typeorm');

class Database {
  constructor() {
    this.connection = null;
  }

  async createConnection() {
    this.connection = await createConnection({
      type: 'mysql',
      host: 'atlas-isep.mysql.database.azure.com',
      username: 'AtlasAdmin',
      password: 'C9wFvW19$GSH92i#',
      database: 'atlasdb',
      port: 3306,
      entities: [User, Beacon],
      synchronize: true,
    });

    console.log('Conexão com o banco de dados estabelecida');
  }
  //CRUD para o usuário
  async insertUser(name, email, phone, password) {
    const user = new User();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;

    const userRepository = getRepository(User);
    await userRepository.save(user);

    console.log('Novo usuário inserido:', user);
  }

  async updateUser(id, name, email, phone, password) {
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

  async deleteUser(id) {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      console.log('Usuário não encontrado');
      return;
    }

    await userRepository.remove(user);

    console.log('Usuário removido:', user);
  }
  //CRUD para beacon
  async insertBeacon(name, latitude, longitude) {
    const beacon = new Beacon();
    beacon.name = name;
    beacon.latitude = latitude;
    beacon.longitude = longitude;

    const beaconRepository = getRepository(Beacon);
    await beaconRepository.save(beacon);

    console.log('Novo beacon inserido:', beacon);
  }

  async updateBeacon(id, name, latitude, longitude) {
    const beaconRepository = getRepository(Beacon);
    const beacon = await beaconRepository.findOne(id);

    if (!beacon) {
      console.log('Beacon não encontrado');
      return;
    }

    beacon.name = name;
    beacon.latitude = latitude;
    beacon.longitude = longitude;

    await beaconRepository.save(beacon);

    console.log('Beacon atualizado:', beacon);
  }

  async deleteBeacon(id) {
    const beaconRepository = getRepository(Beacon);
    const beacon = await beaconRepository.findOne(id);

    if (!beacon) {
      console.log('Beacon não encontrado');
      return;
    }

    await beaconRepository.remove(beacon);

    console.log('Beacon removido:', beacon);
  }
}
//CRUD Message
async insertMessage(title, description, latitude, longitude) {
    const message = new Message();
    message.title = title;
    message.description = description;
    message.latitude = latitude;
    message.longitude = longitude;

    const messageRepository = getRepository(Message);
    await messageRepository.save(message);

    console.log('Nova message inserida:', message);
  }

  async updatemessage(id, title, description, latitude, longitude) {
    const messageRepository = getRepository(Message);
    const message = await messageRepository.findOne(id);

    if (!message) {
      console.log('message não encontrada');
      return;
    }

    message.title = title;
    message.description = description;
    message.latitude = latitude;
    message.longitude = longitude;

    await messageRepository.save(message);

    console.log('message atualizada:', message);
  }

  async deleteMessage(id) {
    const messageRepository = getRepository(Message);
    const message = await messageRepository.findOne(id);

    if (!message) {
      console.log('MMensagem não encontrada');
      return;
    }

    await messageRepository.remove(message);

    console.log('Mensagem removida:', message);
  }
}
//CRUD Media
async insertMedia(url, type) {
    const media = new Media();
    media.url = url;
    media.type = type;
   

    const mediaRepository = getRepository(Media);
    await mediaRepository.save(media);

    console.log('Nova mídia inserida:', media);
  }

  async updateMedia(id, url, type) {
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

  async deletemedia(id) {
    const mediaRepository = getRepository(Media);
    const media = await mediaRepository.findOne(id);

    if (!media) {
      console.log('Mídia não encontrada');
      return;
    }

    await mediaRepository.remove(media);

    console.log('Mídia removida:', media);
  }
}
//CRUD Zone
async insertZone(name, type, latitude, longitude, restriction) {
    const zone = new Zone();
    zone.name = name;
    zone.type = type;
    zone.latitude = latitude;
    zone.longitude = longitude;
    zone.restriction = restriction;


    const zoneRepository = getRepository(Zone);
    await zoneRepository.save(zone);

    console.log('Nova zona inserida:', zone);
  }

  async zoneBeacon(id, name, type, latitude, longitude, restriction) {
    const zoneRepository = getRepository(Zone);
    const zone = await zoneRepository.findOne(id);

    if (!zone) {
      console.log('Zona não encontrada');
      return;
    }

    zone.name = name;
    zone.type = type;
    zone.latitude = latitude;
    zone.longitude = longitude;
    zone.restriction = restriction;

    await zoneRepository.save(zone);

    console.log('Zona atualizada:', zone);
  }

  async deletezone(id) {
    const zoneRepository = getRepository(Zone);
    const zone = await zoneRepository.findOne(id);

    if (!zone) {
      console.log('Zona não encontrada');
      return;
    }

    await zoneRepository.remove(zone);

    console.log('Zona removida:', zone);
  }
}
//CRUD Restrictions
async insertRestrictions(nameRestrictions, type, latitude, longitude) {
    const restrictions = new Restrictions();
    restrictions.nameRestrictions = nameRestrictions;
    restrictions.type = type;
    restrictions.latitude = latitude;
    restrictions.longitude = longitude;

    const restrictionsRepository = getRepository(Restrictions);
    await restrictionsRepository.save(restrictions);

    console.log('Nova restrição inserida:', restrictions);
  }

  async updateRestrictions(id, nameRestrictions, type, latitude, longitude) {
    const restrictionsRepository = getRepository(Restrictions);
    const restrictions = await restrictionsRepository.findOne(id);

    if (!restrictions) {
      console.log('Restrição não encontrada');
      return;
    }

    restrictions.nameRestrictions = nameRestrictions;
    restrictions.type = type;
    restrictions.latitude = latitude;
    restrictions.longitude = longitude;

    await restrictionsRepository.save(restrictions);

    console.log('Restrição atualizada:', restrictions);
  }

  async deleteRestrictions(id) {
    const restrictionsRepository = getRepository(Restrictions);
    const restrictions = await restrictionsRepository.findOne(id);

    if (!restrictions) {
      console.log('Restrição não encontrada');
      return;
    }

    await restrictionsRepository.remove(restrictions);

    console.log('Restrição removida:', restrictions);
  }
}
//CRUD Route
async insertRoute(name, path) {
    const route = new Route();
    route.name = name;
    route.path = path;
    

    const routeRepository = getRepository(Route);
    await routeRepository.save(route);

    console.log('Nova rota inserida:', route);
  }

  async updateRoute(id, name, path) {
    const routeRepository = getRepository(Route);
    const route = await routeRepository.findOne(id);

    if (!route) {
      console.log('Rota não encontrada');
      return;
    }

    route.name = name;
    route.path = path;

    await routeRepository.save(route);

    console.log('Rota atualizada:', route);
  }

  async deleteRoute(id) {
    const routeRepository = getRepository(Route);
    const route = await routeRepository.findOne(id);

    if (!route) {
      console.log('Rota não encontrada');
      return;
    }

    await routeRepository.remove(route);

    console.log('Rota removida:', route);
  }
}
//----------

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  email;

  @Column()
  phone;

  @Column()
  password;


}

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

@Entity()
class Message {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  title;

  @Column()
  description;

  @Column()
  latitude;

  @Column()
  longitude;
}

@Entity()
class Media {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  url;

  @Column()
  type;
}

@Entity()
class Zone {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  type;

  @Column()
  latitude;

  @Column()
  longitude;

   @Column()
  restriction;
}

@Entity()
class Restrictions {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  nameRestrictions;

  @Column()
  type;

  @Column()
  latitude;

  @Column()
  longitude;
}

@Entity()
class Route {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  path;
}


module.exports = Database;
