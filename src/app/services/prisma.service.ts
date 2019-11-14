import { Injectable } from '@nestjs/common';

import { environment } from '@bw/environment';
import { Prisma } from '@bw/prisma';

@Injectable()
export class PrismaService {
  public client: Prisma;

  constructor() {
    this.client = new Prisma({
      endpoint: environment.prisma,
      secret: environment.secret,
      debug: !environment.production,
    });
  }
}
