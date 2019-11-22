import { Injectable } from '@nestjs/common';

import { environment } from '@env';
import { Prisma } from '@prisma';

@Injectable()
export class PrismaService {
  public client: Prisma;

  constructor() {
    this.client = new Prisma({
      endpoint: environment.prisma,
      secret: environment.secret,
      debug: false,
    });
  }
}
