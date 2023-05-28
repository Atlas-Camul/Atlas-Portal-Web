"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getRepository } = require('typeorm');
const { Route } = require('./Connection');
function insertRoute(name, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = new Route();
        route.name = name;
        route.path = path;
        const routeRepository = getRepository(Route);
        yield routeRepository.save(route);
        console.log('Nova rota inserida:', route);
    });
}
function updateRoute(id, name, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const routeRepository = getRepository(Route);
        const route = yield routeRepository.findOne(id);
        if (!route) {
            console.log('Rota n�o encontrada');
            return;
        }
        route.name = name;
        route.path = path;
        yield routeRepository.save(route);
        console.log('Rota atualizada:', route);
    });
}
function deleteRoute(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const routeRepository = getRepository(Route);
        const route = yield routeRepository.findOne(id);
        if (!route) {
            console.log('Rota n�o encontrada');
            return;
        }
        yield routeRepository.remove(route);
        console.log('Rota removida:', route);
    });
}
module.exports = { insertRoute, updateRoute, deleteRoute };
