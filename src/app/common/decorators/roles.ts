import { SetMetadata } from '@nestjs/common';
import { Roles as UserRoles } from 'prisma';

export const Role = (role: UserRoles) => SetMetadata('role', role);
