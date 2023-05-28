//e.g server.js
import express from "express";
import ViteExpress from "vite-express";
import {routes} from './routes';
//import './src/database/index.js';

const app = express();

//app.get("/message", (_, res) => res.send("Hello from express!"));
app.use(express.json());
app.use(routes);

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));