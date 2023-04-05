
import {serveHttp} from './http'
import './websocket'

serveHttp.listen(process.env.PORT, () => console.log('Servidor rodando na porta: ', process.env.PORT, "✔"));

