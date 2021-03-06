export type Params = Record<string, any>;

export type Handler = (request: Request) => Promise<any> | any;

export interface Request {
  id: string;
  method: string;
  params: Params;
}

export interface Response {
  id: string;
  ok: boolean;
  result: any;
}
