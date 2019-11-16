import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { GithubModule } from 'github/github.module';
import { PrismaModule } from 'prisma/prisma.module';
import { GitHubStrategy } from './passport/github.strategy';
import { SessionSerializer } from './passport/session.serializer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule, GithubModule, PrismaModule],
  providers: [GitHubStrategy, SessionSerializer, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
