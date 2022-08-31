export type Request = {
  url: string;
  file?: {
    [key: string]: any;
  };
  body: {
    [key: string]: any;
  };
  query: {
    [key: string]: any;
  };
  params: {
    [key: string]: any;
  };
  headers: any;
};

export type Response = {
  status(status: number): Response;
  json(body: any): Response;
  send(body: any): Response;
  end(): void;
  statusCode?: number;
  setHeader(key: string, value: string): any;
};

export type Method = "get" | "post" | "put" | "delete";

export type Handler = (
  request: Request,
  response: Response,
  next: () => void
) => Promise<void> | void;

export interface Middleware {
  handle: Handler;
}

export interface HttpServer {
  getApp<T>(): T;
  listen(port: number, callback: () => void): void;
  registerMiddleware(handler: Handler): void;
  on(
    method: Method,
    route: string,
    handler: Handler,
    ...middleware: Handler[]
  ): void;
}
