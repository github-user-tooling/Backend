import { Request } from 'express';
import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data: any, req: Request) => req.user);
