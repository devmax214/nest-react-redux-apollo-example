import { Controller, Get, Param } from '@nestjs/common';
import { ClientService, IPageMetadata } from './client.service';

@Controller()
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
  ) {}

  @Get('recipe/:name')
  public async getRecipe(@Param('name') name: string) {
    return this.clientService.getApp();
  }

  @Get('*')
  public async get() {
    return this.clientService.getApp();
  }
}