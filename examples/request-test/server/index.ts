import { XiServer } from 'vite-plugin-11th-server';
import { requestApi } from './request-api';


export default function server(app: XiServer) {
    requestApi(app);
    app.router('/api', (req, res) => {
        res.send(req.body);
    });
}