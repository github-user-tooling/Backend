import { User } from '@prisma';

export interface IAuth extends User {
  accessToken: string;
}
