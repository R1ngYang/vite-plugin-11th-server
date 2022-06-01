import { IncomingMessage, ServerResponse } from 'http';
import { Connect } from 'vite';

export type XiServerHandle = (req: Req, res: Res, next: Function) => void;
export type Router = { path: string | URL; handle: XiServerHandle };
export interface Req extends IncomingMessage {
  url: string;
  body: Record<string, any>;
  params: Record<string, any>;
}

export interface Res extends ServerResponse {
  send(content: Object): Res;
}

export interface XiPluginOptions {
  server: ((app: XiServer) => void | Promise<void>);
  port?: number;
  outDir?: string;
}

export interface XiServer extends Connect.Server {
  router(route: string, fn: XiServerHandle): XiServer;
}
