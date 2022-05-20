import { XiServer } from '../../src/types';

export default function (app: XiServer) {
  app.router('/server/aa', (req, res) => {
    req.body;
    res.send({ a: 123123, b: { a: 123 } });
  });

  app.router('/server/bb', (req, res) => {
    req.body;
    res.send(req.body);
  });
}
