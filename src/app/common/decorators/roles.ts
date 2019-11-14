import { SetMetadata } from '@nestjs/common';

export const Role = (role: string): ((target: object, key?: any, descriptor?: any) => any) =>
  SetMetadata('role', role);
