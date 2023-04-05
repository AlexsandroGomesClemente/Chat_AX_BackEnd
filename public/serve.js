"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
require("./websocket");
http_1.serveHttp.listen(process.env.PORT, () => console.log('Servidor rodando na porta: ', process.env.PORT, "✔"));
