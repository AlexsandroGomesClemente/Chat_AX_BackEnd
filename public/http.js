"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.serveHttp = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const serveHttp = http_1.default.createServer(app);
exports.serveHttp = serveHttp;
const io = new socket_io_1.Server(serveHttp, {
    cors: {
        origin: "*"
    }
});
exports.io = io;
dotenv_1.default.config();
app.use(((0, cors_1.default)()));
app.use(express_1.default.json());
app.use(index_1.default);
app.use((req, res) => {
    res.status(404).send('Rota não encontrada!');
});
