const { io } = require('../index');

io.on('connection', client => {
    console.log('Cliente conectado', client.handshake.address);

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

});
