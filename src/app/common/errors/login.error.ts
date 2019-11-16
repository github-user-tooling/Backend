import { UnauthorizedException, HttpStatus } from '@nestjs/common';

export class LoginException extends UnauthorizedException {
  constructor() {
    super('Authorization failed', 'Please try to login again...');
  }
}
