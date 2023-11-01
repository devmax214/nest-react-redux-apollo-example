import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getAssetPath(url: any) {
    const basePath = this.configService.get('CLIENT_BUILD_PATH');
    return path.join(basePath, url);
  }
}
