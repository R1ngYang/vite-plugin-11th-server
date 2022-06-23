import { XiServer } from 'vite-plugin-11th-server';
import { WebSocketServer } from 'ws';


export default function server(app: XiServer, wss?: WebSocketServer) {
    wss?.on('connection', function (ws) {
        console.log('服务端：客户端已连接');
        ws.on('message', function (message) {
            console.log(message.toString());
            ws.send(message.toString())
        });

    });

}