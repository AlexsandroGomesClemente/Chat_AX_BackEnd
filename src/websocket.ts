import {io} from './http'

let userConecteds:any = []

io.on('connection', (socket: any) => {
    socket.on('user-join',(username:string)=> {
        socket.username = username;
        userConecteds.push(username)
         
            
        socket.broadcast.emit('user-list', userConecteds)
    })

    socket.on('disconnect', ()=> {
        userConecteds = userConecteds.filter( (u: any) => u != socket.username)
    
        socket.broadcast.emit('user-list', userConecteds)
    })

    socket.on('message', (data: any) => {
        console.log(data.message)  
        let obj = {
            username: data.name,
            message:data.text,
        }
        socket.broadcast.emit('show-msg',obj);
    });
})

