import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from '../app.service';
import ssr from '../modules/ssr';
import data from '../modules/data';

interface ResponseError extends Error {
  status?: number;
}

let initialState = {
  isFetching: false,
  apps: data
}

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  constructor(private readonly appService: AppService) {}

  async use(req: Request, res: Response, next: () => void) {
    /*
      const { preloadedState, content}  = ssr(initialState)
      const response = template("Server Rendered Page", preloadedState, content)
      res.setHeader('Cache-Control', 'assets, max-age=604800')
    */
    const { preloadedState, content} = ssr(initialState);

    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const file = this.appService.getAssetPath(req.path);
      res.sendFile(file, (err: ResponseError) => {
        if (err) {
          res.status(err.status).end();
        }
      });
    } else {
      return next();
    }
  }
}