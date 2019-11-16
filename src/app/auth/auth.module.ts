import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from 'app/user/user.module';
import { GitHubStrategy } from './passport/github.strategy';
import { SessionSerializer } from './passport/session.serializer';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule, UserModule],
  providers: [GitHubStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
