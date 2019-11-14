import { Injectable } from '@nestjs/common';
import { PrismaService } from '@bw/services/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  public async getHello(): Promise<string> {
    const users = await this.prisma.client.users();
    return users[0].name;
  }
}
