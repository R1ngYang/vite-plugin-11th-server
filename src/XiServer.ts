import { Router, XiServerHandle } from './types';

export class XiServer {
  routers: Router[] = [];
  use(path: string | URL, handle: XiServerHandle) {
    this.routers.push({ path, handle });
  }
  getRouters() {
    return this.routers;
  }
}

