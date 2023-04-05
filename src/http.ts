import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mainRouter from './routes/index'
import http from 'http'
import { Server } from 'socket.io';

const app = express();
const serveHttp = http.createServer(app)
const io = new Server(serveHttp,{
    cors: {
        origin: "*"
      }
})
dotenv.config()

app.use((cors()));
app.use(express.json());
app.use(mainRouter);



app.use((req: Request, res: Response)=>{
    res.status(404).send('Rota não encontrada!');
});

export { serveHttp, io};

