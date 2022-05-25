import { XiServer } from 'vite-plugin-11th-server';

export function server(app: XiServer) {
    app.router('/hello', (req, res) => {
        res.end("hello word!");
    });
    app.router('/api', (req, res) => {
        res.send(req.body);
    });
}