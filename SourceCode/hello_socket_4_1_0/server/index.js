const WebSocketServer = require('websocket').server;
const WebSocketRouter = require('websocket').router;
const http = require('http');

let server = http.createServer((request, response) => {
    console.log(new Date() + 'Received request for' + request.url);
    response.writeHead(404);
    response.end();
})

server.listen(8080, () => {
    console.log(new Date() + 'Server is listening on port 8080');
})

let wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
})

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

wsServer.on('request', (request) => {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    let connection = request.accept();
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);

            let controller = JSON.parse(message.utf8Data).c;
            switch (controller) {
                case 'home':
                    connection.sendUTF(message.utf8Data);
                    break;

                default:
                    break;
            }
        } else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });

    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

    // let jsonData = {
    //     'c': 'index',
    //     'm': 'test',
    //     'data': {
    //         'content': 'hello world!'
    //     }
    // }
    // connection.sendUTF(JSON.stringify(jsonData));
})