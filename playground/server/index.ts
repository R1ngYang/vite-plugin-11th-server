import { XiServer } from '../../src/types';

export default function (app: XiServer) {
  app.router('/aa', (req, res) => {
    req.body;
    res.send({ a: 123123, b: { a: 123 } });
  });
}
