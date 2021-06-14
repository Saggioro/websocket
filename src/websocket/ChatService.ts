import {io} from '../http';

io.on("connect", socket =>{ // connect recupera uma conexão que foi iniciada
    // socket.emit envia algo para um cliente
    // io.emit envia algo para todos os clientes
    socket.emit("chat_iniciado", {
        message: "Seu chat foi iniciado",
        id: socket.id
    })
})