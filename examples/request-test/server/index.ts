import { XiServer } from 'vite-plugin-11th-server';


export default function server(app: XiServer) {
    app.router('/api', (req, res) => {
        res.send(req.body);
    });
    app.router('/hello', (req, res) => {
        res.end("hello word!");
    });
}