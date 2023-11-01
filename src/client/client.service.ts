import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import ssr from '../modules/ssr';
import data from '../modules/data';

export interface IPageMetadata {
  title?: string;
  description?: string;
  image?: string;
}

const DEFAULT_META = {};

let initialState = {
  isFetching: false,
  apps: data
}

@Injectable()
export class ClientService {
  constructor(private configService: ConfigService) {}

  public async getApp(pageMetadata: IPageMetadata = DEFAULT_META) {
    const basePath = this.configService.get('CLIENT_BUILD_PATH');
    const filePath = path.resolve(path.join(basePath, 'index.html'));

    const DEFAULT_TITLE = this.configService.get('DEFAULT_TITLE');
    const DEFAULT_DESCRIPTION = this.configService.get('DEFAULT_DESCRIPTION');
    const DEFAULT_IMAGE = this.configService.get('DEFAULT_IMAGE');

    const { preloadedState, content} = ssr(initialState);

    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException, data: string) => {
        if (err) {
          reject(err);
        } else {
          data = data.replace(/__PAGE_TITLE__/g, pageMetadata.title || DEFAULT_TITLE);
          data = data.replace(/__PAGE_DESCRIPTION__/g, pageMetadata.description || DEFAULT_DESCRIPTION);
          data = data.replace(/__PAGE_IMAGE__/g, pageMetadata.image || DEFAULT_IMAGE);
          data = data.replace(/%__STATE__%/, JSON.stringify(preloadedState));
          data = data.replace(/%__CONTENT__%/, content);
          resolve(data);
        }
      });
    });
  }
}