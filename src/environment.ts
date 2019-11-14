import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  port: process.env.PORT || 3000,
  production: process.env.NODE_ENV || false,
  prisma: process.env.PRISMA || '',
  secret: process.env.SECRET || '',
};
