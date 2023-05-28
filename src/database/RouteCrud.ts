 
const { getRepository } = require('typeorm');
const { Route } = require('./Connection');


async function insertRoute(name, path) {
        const route = new Route();
        route.name = name;
        route.path = path;


        const routeRepository = getRepository(Route);
        await routeRepository.save(route);

        console.log('Nova rota inserida:', route);
    }

async function updateRoute(id, name, path) {
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

async function deleteRoute(id) {
        const routeRepository = getRepository(Route);
        const route = await routeRepository.findOne(id);

        if (!route) {
            console.log('Rota não encontrada');
            return;
        }

        await routeRepository.remove(route);

        console.log('Rota removida:', route);
    }


        module.exports = { insertRoute, updateRoute, deleteRoute };