import { XiServer } from 'vite-plugin-11th-server';

export function requestApi(app: XiServer) {
    app.router('/hello', (req, res) => {
        res.end("hello word!");
    });
}