import { getRepository } from 'typeorm';
import { startConnection } from './Connection';
import * as Beacon from './Beacon';

//const { getRepository } = require('typeorm');
//const { Beacon } = require('./Connection');

export async function insertBeacon(name, latitude, longitude) {
    startConnection();
    const beacon = new Beacon();
        beacon.name = name;
        beacon.latitude = latitude;
        beacon.longitude = longitude;

        const beaconRepository = getRepository(Beacon);
        await beaconRepository.save(beacon);

        console.log('Novo beacon inserido:', beacon);
    }

    export async function updateBeacon(id, name, latitude, longitude) {
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

    export async function deleteBeacon(id) {
        const beaconRepository = getRepository(Beacon);
        const beacon = await beaconRepository.findOne(id);

        if (!beacon) {
            console.log('Beacon não encontrado');
            return;
        }

        await beaconRepository.remove(beacon);

        console.log('Beacon removido:', beacon);
    }