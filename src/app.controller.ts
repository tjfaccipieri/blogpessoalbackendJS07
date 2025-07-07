import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return await resposta.redirect('/swagger');
  }
}
