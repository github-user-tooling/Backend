import { Module } from '@nestjs/common';
import { AppController } from '@bw/app.controller';
import { AppService } from '@bw/services/app.service';
import { PrismaService } from '@bw/services/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
