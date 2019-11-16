import { User } from '@prisma';

export interface IActiveUser extends User {
  accessToken: string;
}
