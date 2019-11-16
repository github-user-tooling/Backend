import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

import { LoginException } from './login.error';

@Catch(LoginException)
export class LoginExceptionFilter implements ExceptionFilter {
  public catch(exception: LoginException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    request.logOut();

    response.status(status).json(exception.getResponse());
  }
}
