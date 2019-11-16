import { Module } from '@nestjs/common';

import { AuthModule } from 'auth/auth.module';
import { UserModule } from 'user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { GithubModule } from 'github/github.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, GithubModule],
})
export class AppModule {}
