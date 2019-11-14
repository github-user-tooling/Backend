import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  production: process.env.NODE_ENV || false,
  prisma: process.env.PRISMA || '',
  secret: process.env.SECRET || '',
};
