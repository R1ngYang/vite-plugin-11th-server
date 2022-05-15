import { IncomingMessage, ServerResponse } from 'http';

export type XiServerHandle = (req: Req, res: Res, next: Function) => void;
export type Router = { path: string | URL; handle: XiServerHandle };
export interface Req extends IncomingMessage {
  url: string;
  body: Record<string, any>;
  params: Record<string, any>;
}

export interface Res extends ServerResponse {}

export interface XiPluginOptions {
}
