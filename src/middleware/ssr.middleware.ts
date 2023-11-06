import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { renderSSR } from '../modules/ssr';

interface ResponseError extends Error {
  status?: number;
}

@Injectable()
export class SSRMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const filePath = this.getAssetPath(req.path);
      res.sendFile(filePath, (err: ResponseError) => {
        if (err) {
          res.status(err.status).end();
        }
      });
    } else {
      const basePath = this.configService.get('CLIENT_BUILD_PATH');
      const filePath = path.resolve(path.join(basePath, 'index.html'));
      fs.readFile(filePath, 'utf8', async (err: NodeJS.ErrnoException, data: string) => {
        if (err) {
          res.send(err).end();
        } else {
          const DEFAULT_TITLE = this.configService.get('DEFAULT_TITLE');
          const DEFAULT_DESCRIPTION = this.configService.get('DEFAULT_DESCRIPTION');
          const DEFAULT_IMAGE = this.configService.get('DEFAULT_IMAGE');
          data = data.replace(/__PAGE_TITLE__/g, DEFAULT_TITLE);
          data = data.replace(/__PAGE_DESCRIPTION__/g, DEFAULT_DESCRIPTION);
          data = data.replace(/__PAGE_IMAGE__/g, DEFAULT_IMAGE);

          // const { preloadedState, content } = await getSSRState(req, initialState);
          // data = data.replace(/{\/\*__STATE__\*\/}/, JSON.stringify(preloadedState));
          // data = data.replace(/<!--%__CONTENT__%-->/, content);
      
          // res.send(data).end();
          await renderSSR(req, res, data);
        }
      });
    }
  }

  getAssetPath(url: any) {
    const basePath = this.configService.get('CLIENT_BUILD_PATH');
    return path.join(basePath, url);
  }
}