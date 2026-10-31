const WebSocket = require('ws');
const PORT = process.env.PORT || 8080; 
const server = new WebSocket.Server({ port: PORT });

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
});
console.log(`Сервер чата запущен`);