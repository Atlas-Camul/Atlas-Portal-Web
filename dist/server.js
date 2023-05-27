"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//e.g server.js
const express_1 = __importDefault(require("express"));
const vite_express_1 = __importDefault(require("vite-express"));
//import './src/database/index.js';
const app = (0, express_1.default)();
app.get("/message", (_, res) => res.send("Hello from express!"));
vite_express_1.default.listen(app, 3000, () => console.log("Server is listening..."));
